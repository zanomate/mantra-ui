import { Attribute } from '../Attribute/Attribute'

/**
 * CSS style object of values separated by semicolons.
 * @example "background-color: red; color: green;"
 */
export namespace StyleObject {
  export interface Type {
    [property: string]: any
  }

  export const parse: Attribute.Parse<Type> = value => {
    if (!value) return {}
    const properties = value.split(';').filter(p => !!p)
    return properties.reduce<Type>((res, property) => {
      const [raw_name, raw_value = ''] = property.split(':')

      const propertyName = raw_name.trim()
      const propertyValue = raw_value.trim()

      if (propertyName) {
        res[propertyName] = propertyValue
      }
      return res
    }, {})
  }

  export const stringify: Attribute.Stringify<Type> = value => {
    if (!value) return ''
    return Object
      .keys(value)
      .filter(name => (
        !!name
        && value[name] !== undefined
        && value[name] !== null
        && value[name] !== ''
      ))
      .map(name => {
        let propertyName = name.trim()
        const propertyValue = value[name]
        propertyName += `:${String(propertyValue).trim()}`
        return propertyName
      })
      .join(';')
  }
}
