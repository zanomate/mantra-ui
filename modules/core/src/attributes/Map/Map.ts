/**
 * CSS style object of values separated by semicolons.
 * @example "background-color: red; color: green;"
 */
export interface Map {
  [property: string]: any
}

export const MapConverter = {
  fromAttribute(value: string | null): Map | undefined {
    if (!value) return undefined
    const properties: string[] = value
      .split(';')
      .filter((p: any) => !!p)
    return properties.reduce<Map>((res, property) => {
      const [raw_name, raw_value = ''] = property.split(':')

      const propertyName = raw_name.trim()
      const propertyValue = raw_value.trim()

      if (propertyName) {
        res[propertyName] = propertyValue
      }
      return res
    }, {})
  },
  toAttribute(value: Map | undefined): unknown {
    if (!value) return undefined
    const keys = Object
      .keys(value)
      .filter(name => (
        !!name
        && value[name] !== undefined
        && value[name] !== null
        && value[name] !== ''
      ))
    if (!keys.length) return undefined
    return keys
      .map(key => {
        let propertyName = key.trim()
        const propertyValue = value[key]
        propertyName += `:${String(propertyValue).trim()}`
        return propertyName
      })
      .join('; ')
  }
}
