import { Image } from "../../image.class";
import { Point } from "../../point.class";
import { ImageProcessor } from "../image-processor.interface";
import { RGBA } from "../../rgba.class";
export default class implements ImageProcessor {
    colorAt(image: Image | Promise<Image>, point: Point | Promise<Point>): Promise<RGBA>;
}
//# sourceMappingURL=jimp-image-processor.class.d.ts.map