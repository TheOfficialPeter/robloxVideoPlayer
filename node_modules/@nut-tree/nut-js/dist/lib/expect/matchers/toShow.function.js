"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toShow = void 0;
const optionalsearchparameters_class_1 = require("../../optionalsearchparameters.class");
const toShow = async (received, needle, confidence) => {
    let locationParams;
    if (confidence) {
        locationParams = new optionalsearchparameters_class_1.OptionalSearchParameters();
        locationParams.confidence = confidence;
    }
    const identifier = (await needle).id;
    try {
        await received.find(needle, locationParams);
        return {
            message: () => `Expected screen to not show ${identifier}`,
            pass: true,
        };
    }
    catch (err) {
        return {
            message: () => `Screen is not showing ${identifier}: ${err}`,
            pass: false,
        };
    }
};
exports.toShow = toShow;
//# sourceMappingURL=toShow.function.js.map