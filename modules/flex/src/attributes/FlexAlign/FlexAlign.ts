import { Attribute } from '@mantra-ui/core'

export namespace FlexAlign {
  export enum Type {
    STRETCH = 'stretch',
    START = 'start',
    END = 'end',
    CENTER = 'center',
    BASELINE = 'baseline',
  }

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined || value === null || value === '') return undefined
    switch (value) {
      case Type.STRETCH:
      case Type.START:
      case Type.END:
      case Type.CENTER:
      case Type.BASELINE:
        return value
      default:
        return undefined
    }
  }

  export const toCss: Attribute.ToCss<Type> = value => {
    if (value === undefined || value === null) return 'unset'
    switch (value) {
      case Type.STRETCH:
        return 'stretch'
      case Type.START:
        return 'flex-start'
      case Type.END:
        return 'flex-end'
      case Type.CENTER:
        return 'center'
      case Type.BASELINE:
        return 'baseline'
      default:
        return 'unset'
    }
  }
}
