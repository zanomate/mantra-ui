/**
 * List of values separated by a space.
 * @example "value1 value2 value3"
 */
export type MultiValueAttribute = string[]

export const parseMultiValueAttribute = (value: string = ''): MultiValueAttribute => {
  if (!value) return []
  return value
    .split(/\s/)
    .filter(v => !!v)
    .map(v => v.trim())
}

export const stringifyMultiValueAttribute = (attribute: MultiValueAttribute = []): string => {
  if (!attribute) return ''
  return attribute
    .map(v => v.trim())
    .filter(v => !!v)
    .join(' ')
}
