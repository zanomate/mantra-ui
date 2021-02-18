import { Attribute } from '../Attribute/Attribute'

export namespace CssSize {
  export type Type = number | string

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined || value === '') return undefined
    const num = Number(value)
    if (isNaN(num)) return value
    return num
  }

  export const toCss: Attribute.ToCss<Type> = value => {
    if (value === undefined) return 'unset'
    if (typeof value === 'number') return `${value}px`
    if (value === '') return 'unset'
    return value
  }
}
