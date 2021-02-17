import { Attribute } from '@mantra-ui/core'

export namespace FlexJustify {
  export enum Type {
    START = 'start',
    END = 'end',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly',
  }

  export const parse: Attribute.Parse<Type> = value => {
    if (value === undefined || value === null) return undefined
    const trimmed = value.trim()
    if (trimmed === '') return undefined
    switch (value) {
      case Type.START:
      case Type.END:
      case Type.CENTER:
      case Type.SPACE_BETWEEN:
      case Type.SPACE_AROUND:
      case Type.SPACE_EVENLY:
        return value
      default:
        return undefined
    }
  }

  export const toCss: Attribute.ToCss<Type> = value => {
    if (value === undefined || value === null) return 'unset'
    switch (value) {
      case Type.START:
        return 'flex-start'
      case Type.END:
        return 'flex-end'
      case Type.CENTER:
        return 'center'
      case Type.SPACE_BETWEEN:
        return 'space-between'
      case Type.SPACE_AROUND:
        return 'space-around'
      case Type.SPACE_EVENLY:
        return 'space-evenly'
      default:
        return 'unset'
    }
  }
}
