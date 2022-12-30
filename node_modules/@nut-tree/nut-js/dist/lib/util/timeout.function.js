"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
function timeout(updateIntervalMs, maxDurationMs, action, config) {
    return new Promise((resolve, reject) => {
        let interval;
        let timerCleaned = false;
        if (config === null || config === void 0 ? void 0 : config.signal) {
            config.signal.onabort = () => {
                cleanupTimer();
                reject(`Action aborted by signal`);
            };
        }
        function executeInterval() {
            action().then(validateResult).catch(handleRejection);
        }
        function validateResult(result) {
            if (!result && !timerCleaned) {
                interval = setTimeout(executeInterval, updateIntervalMs);
            }
            else {
                cleanupTimer();
                resolve(result);
            }
        }
        function handleRejection() {
            if (!timerCleaned) {
                interval = setTimeout(executeInterval, updateIntervalMs);
            }
        }
        function cleanupTimer() {
            timerCleaned = true;
            if (maxTimeout) {
                clearTimeout(maxTimeout);
            }
            if (interval) {
                clearTimeout(interval);
            }
        }
        const maxTimeout = setTimeout(() => {
            cleanupTimer();
            reject(`Action timed out after ${maxDurationMs} ms`);
        }, maxDurationMs);
        executeInterval();
    });
}
exports.timeout = timeout;
//# sourceMappingURL=timeout.function.js.map