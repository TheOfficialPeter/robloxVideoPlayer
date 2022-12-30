import { Region } from "./region.class";
import { ProviderRegistry } from "./provider/provider-registry.class";
export declare class Window {
    private providerRegistry;
    private windowHandle;
    constructor(providerRegistry: ProviderRegistry, windowHandle: number);
    get title(): Promise<string>;
    get region(): Promise<Region>;
}
//# sourceMappingURL=window.class.d.ts.map