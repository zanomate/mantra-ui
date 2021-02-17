import { Attribute } from '@mantra-ui/core'

export namespace FlexBasis {
  export enum SpecialValue {
    AUTO = 'auto',
    CONTENT = 'content',
  }

  export type Type = number | string | SpecialValue

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined || value === null) return undefined
    const trimmed = value.trim()
    if (trimmed === '') return undefined
    const asNumber = Number(value)
    if (!isNaN(asNumber)) return asNumber
    return trimmed
  }

  export const toCss: Attribute.ToCss<Type> = value => {
    if (value === undefined || value === null) return 'unset'
    if (typeof value === 'number') return String(value)
    const trimmed = value.trim()
    if (trimmed === '') return 'unset'
    return trimmed
  }
}
