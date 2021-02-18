import { Attribute } from '../Attribute/Attribute'

/**
 * List of values separated by a space.
 * @example "value1 value2 value3"
 */
export namespace MultiValue {
  export type Type = string[]

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined || value === '') return undefined
    return value
      .split(/\s/)
      .filter((v: any) => !!v)
      .map((v: any) => v.trim())
  }

  export const stringify: Attribute.Stringify<Type> = value => {
    if (!value) return ''
    return value
      .map(v => v.trim())
      .filter(v => !!v)
      .join(' ')
  }
}
