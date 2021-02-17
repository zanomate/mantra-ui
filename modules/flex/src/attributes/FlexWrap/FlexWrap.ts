import { Attribute } from '@mantra-ui/core'

export namespace FlexWrap {
  export enum SpecialValue {
    REVERSE = 'reverse',
  }

  export type Type = boolean | SpecialValue

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined) return undefined
    if (value === '' || value === 'true') return true
    if (value === 'false') return false
    if (value === SpecialValue.REVERSE) return SpecialValue.REVERSE
    return undefined
  }

  export const toCss: Attribute.ToCss<Type> = value => {
    if (value === undefined) return 'unset'
    if (typeof value === 'boolean') return value ? 'wrap' : 'nowrap'
    if (value === SpecialValue.REVERSE) return 'wrap-reverse'
    return 'unset'
  }
}
