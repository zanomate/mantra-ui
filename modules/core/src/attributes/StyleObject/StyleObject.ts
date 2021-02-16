/**
 * CSS style object of values separated by semicolons.
 * @example "background-color: red; color: green;"
 */
export namespace StyleObject {
  export interface Type {
    [property: string]: any
  }

  export const parse = (value?: string | null): Type => {
    if (!value) return {}
    const properties = value.split(';').filter(p => !!p)
    return properties.reduce<Type>((res, property) => {
      const [raw_name, raw_value = ''] = property.split(':')

      const name = raw_name.trim()
      // eslint-disable-next-line no-shadow
      const value = raw_value.trim()

      if (name) {
        res[name] = value
      }
      return res
    }, {})
  }

  export const stringify = (attribute: Type = {}): string => {
    if (!attribute) return ''
    return Object
      .keys(attribute)
      .filter(name => (
        !!name
        && attribute[name] !== undefined
        && attribute[name] !== null
        && attribute[name] !== ''
      ))
      .map(name => {
        let property = name.trim()
        const value = attribute[name]
        property += `:${String(value).trim()}`
        return property
      })
      .join(';')
  }
}
