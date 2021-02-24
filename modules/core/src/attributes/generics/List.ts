import { AttributeConverter } from '../../types/AttributeConverter'

export type List<T> = T[]

/**
 * List of values separated by a space.
 * @example "value1 value2 value3"
 */
export const listConverter = <T>(tConverter: AttributeConverter<T>) => ({
  fromAttribute: (value?: string | null): T[] | undefined => {
    if (value === undefined || value === null || value === '') return undefined
    const values = value
      .split(/\s/)
      .map(v => v.trim())
      .filter(v => !!v)
    if (!values.length) return undefined
    return values.map(tConverter.fromAttribute)
  },
  toAttribute: (value?: T[] | undefined): unknown => {
    if (value === undefined || value === null) return undefined
    if (!value.length) return undefined
    return value
      .map(v => String(v).trim())
      .join(' ')
  }
})
