import { Attribute } from '@mantra-ui/core'

export namespace FlexDirection {
  export enum Type {
    ROW = 'row',
    COLUMN = 'column'
  }

  export interface Options {
    row?: boolean
    column?: boolean
    reverse?: boolean
  }

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined) return undefined
    switch (value) {
      case Type.ROW:
      case Type.COLUMN:
        return value
      default:
        return undefined
    }
  }

  export const toCss: Attribute.ToCss<Type, Options> = (value, options = {}) => {
    if (options.column) return options.reverse ? 'column-reverse' : 'column'
    if (options.row) return options.reverse ? 'row-reverse' : 'row'
    if (value === undefined) return 'unset'
    switch (value) {
      case Type.ROW:
        return options.reverse ? 'row-reverse' : 'row'
      case Type.COLUMN:
        return options.reverse ? 'column-reverse' : 'column'
      default:
        return 'unset'
    }
  }
}
