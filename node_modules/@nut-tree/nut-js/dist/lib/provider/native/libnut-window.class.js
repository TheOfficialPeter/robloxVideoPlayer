"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libnut = require("@nut-tree/libnut");
const region_class_1 = require("../../region.class");
class WindowAction {
    getWindows() {
        return new Promise((resolve, reject) => {
            try {
                resolve(libnut.getWindows());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    getActiveWindow() {
        return new Promise((resolve, reject) => {
            try {
                resolve(libnut.getActiveWindow());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    getWindowRegion(windowHandle) {
        return new Promise((resolve, reject) => {
            try {
                const windowRect = libnut.getWindowRect(windowHandle);
                resolve(new region_class_1.Region(windowRect.x, windowRect.y, windowRect.width, windowRect.height));
            }
            catch (e) {
                reject(e);
            }
        });
    }
    getWindowTitle(windowHandle) {
        return new Promise((resolve, reject) => {
            try {
                resolve(libnut.getWindowTitle(windowHandle));
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports.default = WindowAction;
//# sourceMappingURL=libnut-window.class.js.map