/**
 * CSS style object of values separated by semicolons.
 * @example "background-color: red; color: green;"
 */
export interface StyleAttribute {
  [property: string]: any
}

export const parseStyleAttribute = (value?: string | null): StyleAttribute => {
  if (!value) return {}
  const properties = value.split(';').filter(p => !!p)
  return properties.reduce<StyleAttribute>((res, property) => {
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

export const stringifyStyleAttribute = (attribute: StyleAttribute = {}): string => {
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
