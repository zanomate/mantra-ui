/**
 * List of values separated by a space.
 * @example "value1 value2 value3"
 */
declare type MultiValueAttribute = string[];
declare const parseMultiValueAttribute: (value?: string) => MultiValueAttribute;
declare const stringifyMultiValueAttribute: (attribute?: MultiValueAttribute) => string;

/**
 * CSS style object of values separated by semicolons.
 * @example "background-color: red; color: green;"
 */
declare type StyleAttribute = {
    [property: string]: any;
};
declare const parseStyleAttribute: (value?: string | null | undefined) => StyleAttribute;
declare const stringifyStyleAttribute: (attribute?: StyleAttribute) => string;

export { MultiValueAttribute, StyleAttribute, parseMultiValueAttribute, parseStyleAttribute, stringifyMultiValueAttribute, stringifyStyleAttribute };
