import { Attribute } from '@mantra-ui/core'

export namespace FlexSize {
  export type Type = number | boolean | undefined

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined) return undefined
    if (value === '' || value === 'true') return true
    if (value === 'false') return false
    const num = Number(value)
    if (isNaN(num)) return undefined
    return num
  }

  export const toCss: Attribute.ToCss<Type> = value => {
    if (value === undefined) return 'unset'
    if (typeof value === 'boolean') return value ? '1' : '0'
    return value.toString()
  }
}
