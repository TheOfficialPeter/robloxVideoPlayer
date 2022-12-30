import { MatchResult } from "./match-result.class";
import { Region } from "./region.class";
export declare class ScaledMatchResult extends MatchResult {
    readonly confidence: number;
    readonly scale: number;
    readonly location: Region;
    readonly error?: Error | undefined;
    constructor(confidence: number, scale: number, location: Region, error?: Error | undefined);
}
//# sourceMappingURL=scaled-match-result.class.d.ts.map