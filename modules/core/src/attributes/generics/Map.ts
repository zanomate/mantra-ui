import { AttributeConverter } from '../../types/AttributeConverter'

export interface Map<T> {
  [property: string]: T
}

/**
 * Map of values separated by semicolons.
 * @param tConverter Converter for the generics T.
 * @example "background-color: red; color: green;"
 */
export const mapConverter = <T>(tConverter: AttributeConverter<T>): AttributeConverter<Map<T>> => ({
  fromAttribute(value?: string | null): Map<T> | undefined {
    if (value === undefined || value === null || value === '') return undefined
    const properties: string[] = value
      .split(';')
      .filter((p: any) => !!p)
    return properties.reduce<Map<T>>((res, property) => {
      const [raw_name, raw_value = ''] = property.split(':')

      const propertyName = raw_name.trim()
      const propertyValue = raw_value.trim()

      if (propertyName) {
        res[propertyName] = tConverter.fromAttribute(propertyValue)
      }
      return res
    }, {})
  },
  toAttribute(value?: Map<T> | undefined): unknown {
    if (value === undefined || value === null) return undefined
    const keys = Object
      .keys(value)
      .filter(key => (
        !!key
        && value[key] !== undefined
        && value[key] !== null
      ))
    if (!keys.length) return undefined
    return keys
      .map(propertyName => {
        const propertyValue = tConverter.toAttribute(value[propertyName])
        return `${propertyName.trim()}:${String(propertyValue).trim()}`
      })
      .join('; ')
  }
})
