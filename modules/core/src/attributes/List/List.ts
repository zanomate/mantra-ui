/**
 * List of values separated by a space.
 * @example "value1 value2 value3"
 */
export type List = string[]

export const ListConverter = {
  fromAttribute(value: string | null): List | undefined {
    if (!value) return undefined
    const values = value.split(/\s/).map(v => v.trim()).filter(v => !!v)
    if (values.length) return values
    return undefined
  },
  toAttribute(value: List | undefined): unknown {
    if (!value || !value.length) return undefined
    return value
      .map(v => v.trim())
      .filter(v => !!v)
      .join(' ')
  }
}

export interface ClassListAsMap {
  [property: string]: true
}

export const classListToClassMap = (classList: List): ClassListAsMap => (
  classList.reduce<ClassListAsMap>((res, className) => {
    res[className] = true
    return res
  }, {})
)
