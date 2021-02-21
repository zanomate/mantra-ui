import { ListConverter } from '../List/List'
import { MapConverter } from '../Map/Map'
import { Size, SizeConverter } from '../Size/Size'

export interface BoxSize {
  top?: Size
  left?: Size
  right?: Size
  bottom?: Size
}

export const BoxSizeConverter = {
  fromAttribute(value: string | null): BoxSize | undefined {
    if (!value) return undefined
    // values defined as object
    if (value.indexOf(':') >= 0) {
      const map = MapConverter.fromAttribute(value)
      if (!map) return undefined
      const res: BoxSize = {}
      const top = SizeConverter.fromAttribute(map.top)
      const left = SizeConverter.fromAttribute(map.left)
      const right = SizeConverter.fromAttribute(map.right)
      const bottom = SizeConverter.fromAttribute(map.bottom)
      if (top !== undefined) {
        res.top = top
      }
      if (left !== undefined) {
        res.left = left
      }
      if (right !== undefined) {
        res.right = right
      }
      if (bottom !== undefined) {
        res.bottom = bottom
      }
      if (Object.keys(res).length) return res
      return undefined
    }
    // values defined as array
    const list = ListConverter.fromAttribute(value)
    if (!list) return undefined
    const [v1, v2, v3, v4] = list
    return {
      top: SizeConverter.fromAttribute(v1),
      left: SizeConverter.fromAttribute(v4 || v2 || v1),
      right: SizeConverter.fromAttribute(v2 || v1),
      bottom: SizeConverter.fromAttribute(v3 || v1)
    }
  },
  toAttribute(value: BoxSize | undefined): unknown {
    if (!value) return undefined
    return MapConverter.toAttribute({
      top: SizeConverter.toAttribute(value.top),
      left: SizeConverter.toAttribute(value.left),
      right: SizeConverter.toAttribute(value.right),
      bottom: SizeConverter.toAttribute(value.bottom)
    })
  }
}
