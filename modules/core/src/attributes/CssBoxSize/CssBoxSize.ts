import { Attribute } from '../Attribute/Attribute'
import { CssSize } from '../CssSize/CssSize'
import { MultiValue } from '../MultiValue/MultiValue'

export namespace CssBoxSize {
  export type Type = (number | string | undefined)[]

  export const parse: Attribute.Parse<Type> = value => {
    const values = MultiValue.parse(value)
    if (values === undefined) return undefined
    return values.map(CssSize.parse)
  }

  export const toCss: Attribute.ToCss<Type> = value => {
    if (value === undefined || value.length === 0) return 'unset'
    const values = MultiValue.stringify(value.map(CssSize.toCss))
    if (values === undefined) return 'unset'
    return values
  }
}
