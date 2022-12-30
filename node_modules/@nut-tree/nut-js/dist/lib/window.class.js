"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Window = void 0;
class Window {
    constructor(providerRegistry, windowHandle) {
        this.providerRegistry = providerRegistry;
        this.windowHandle = windowHandle;
    }
    get title() {
        return this.providerRegistry.getWindow().getWindowTitle(this.windowHandle);
    }
    get region() {
        return this.providerRegistry.getWindow().getWindowRegion(this.windowHandle);
    }
}
exports.Window = Window;
//# sourceMappingURL=window.class.js.map