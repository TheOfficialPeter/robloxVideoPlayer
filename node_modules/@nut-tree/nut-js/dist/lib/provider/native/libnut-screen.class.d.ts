import { Image } from "../../image.class";
import { Region } from "../../region.class";
import { ScreenProviderInterface } from "../screen-provider.interface";
export default class ScreenAction implements ScreenProviderInterface {
    private static determinePixelDensity;
    constructor();
    grabScreen(): Promise<Image>;
    grabScreenRegion(region: Region): Promise<Image>;
    highlightScreenRegion(region: Region, duration: number, opacity: number): Promise<void>;
    screenWidth(): Promise<number>;
    screenHeight(): Promise<number>;
    screenSize(): Promise<Region>;
}
//# sourceMappingURL=libnut-screen.class.d.ts.map