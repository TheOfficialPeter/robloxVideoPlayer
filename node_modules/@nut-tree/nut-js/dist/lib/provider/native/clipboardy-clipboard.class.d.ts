import { ClipboardProviderInterface } from "../clipboard-provider.interface";
export default class implements ClipboardProviderInterface {
    constructor();
    hasText(): Promise<boolean>;
    clear(): Promise<boolean>;
    copy(text: string): Promise<void>;
    paste(): Promise<string>;
}
//# sourceMappingURL=clipboardy-clipboard.class.d.ts.map