import TomSelect from './tom-select';
/**
 * Converts a scalar to its best string representation
 * for hash keys and HTML attribute values.
 *
 * Transformations:
 *   'str'     -> 'str'
 *   null      -> ''
 *   undefined -> ''
 *   true      -> '1'
 *   false     -> '0'
 *   0         -> '0'
 *   1         -> '1'
 *
 */
export declare function hash_key(value: string): string | null;
/**
 * Escapes a string for use within HTML.
 *
 */
export declare function escape_html(str: string): string;
/**
 * Debounce the user provided load function
 *
 */
export declare function loadDebounce(fn: any, delay: any): (this: TomSelect, value: string, callback: any) => void;
/**
 * Debounce all fired events types listed in `types`
 * while executing the provided `fn`.
 *
 */
export declare function debounce_events(self: TomSelect, types: string[], fn: () => void): void;
/**
 * Determines the current selection within a text input control.
 * Returns an object containing:
 *   - start
 *   - length
 *
 */
export declare function getSelection(input: HTMLInputElement): {
    start: number;
    length: number;
};
/**
 * Prevent default
 *
 */
export declare function preventDefault(evt?: Event, stop?: boolean): void;
/**
 * Prevent default
 *
 */
export declare function addEvent(target: EventTarget, type: string, callback: EventListener, options?: object): void;
/**
 * Return true if the requested key is down
 * Will return false if more than one control character is pressed ( when [ctrl+shift+a] != [ctrl+a] )
 * The current evt may not always set ( eg calling advanceSelection() )
 *
 */
export declare function isKeyDown(key_name: string, evt: KeyboardEvent | MouseEvent): boolean;
