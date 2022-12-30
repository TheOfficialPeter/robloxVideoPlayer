import { Region } from "../../region.class";
import { WindowProviderInterface } from "../window-provider.interface";
export default class WindowAction implements WindowProviderInterface {
    getWindows(): Promise<number[]>;
    getActiveWindow(): Promise<number>;
    getWindowRegion(windowHandle: number): Promise<Region>;
    getWindowTitle(windowHandle: number): Promise<string>;
}
//# sourceMappingURL=libnut-window.class.d.ts.map