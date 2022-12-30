import { Region } from "./region.class";
export declare class MatchResult {
    readonly confidence: number;
    readonly location: Region;
    readonly error?: Error | undefined;
    constructor(confidence: number, location: Region, error?: Error | undefined);
}
//# sourceMappingURL=match-result.class.d.ts.map