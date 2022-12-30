import { Key } from "../../key.enum";
import { KeyboardProviderInterface } from "../keyboard-provider.interface";
export default class KeyboardAction implements KeyboardProviderInterface {
    static KeyLookupMap: Map<Key, string | null>;
    static keyLookup(key: Key): any;
    private static mapModifierKeys;
    private static key;
    constructor();
    type(input: string): Promise<void>;
    click(...keys: Key[]): Promise<void>;
    pressKey(...keys: Key[]): Promise<void>;
    releaseKey(...keys: Key[]): Promise<void>;
    setKeyboardDelay(delay: number): void;
}
//# sourceMappingURL=libnut-keyboard.class.d.ts.map