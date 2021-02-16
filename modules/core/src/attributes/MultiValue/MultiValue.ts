/**
 * List of values separated by a space.
 * @example "value1 value2 value3"
 */
export namespace MultiValue {
  export type Type = string[]

  export const parse = (value: string = ''): Type => {
    if (!value) return []
    return value
      .split(/\s/)
      .filter(v => !!v)
      .map(v => v.trim())
  }

  export const stringify = (attribute: Type = []): string => {
    if (!attribute) return ''
    return attribute
      .map(v => v.trim())
      .filter(v => !!v)
      .join(' ')
  }
}
