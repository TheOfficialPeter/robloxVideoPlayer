import { Image } from "../image.class";
import { DataSinkInterface } from "./data-sink.interface";
export interface ImageWriterParameters {
    image: Image;
    path: string;
}
export declare type ImageWriter = DataSinkInterface<ImageWriterParameters, void>;
//# sourceMappingURL=image-writer.type.d.ts.map