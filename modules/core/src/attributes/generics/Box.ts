import { AttributeConverter } from '../../types/AttributeConverter'
import { listConverter } from './List'
import { Map, mapConverter } from './Map'

export interface BoxMap<T> {
  top?: T
  left?: T
  right?: T
  bottom?: T
}

export const isBoxMap = (value: any): boolean => (
  // must be truly
  value
  // must be an object but not an array
  && typeof value === 'object' && !Array.isArray(value)
  // must contains at least one of the specific properties
  && (
    value.top !== undefined
    || value.left !== undefined
    || value.right !== undefined
    || value.bottom !== undefined
  )
  // must not contains any other property
  && Object.keys(value).find(k => !['top', 'left', 'right', 'bottom'].includes(k)) === undefined
)

export type Box<T> = T | T[] | BoxMap<T>

export const boxConverter = <T>(
  tConverter: AttributeConverter<T>
): AttributeConverter<Box<T>> => ({
  fromAttribute: (value?: string | null): Box<T> | undefined => {
    if (value === undefined || value === null) return undefined
    // values defined as object
    if (value.indexOf(':') >= 0) {
      const map = mapConverter(tConverter).fromAttribute(value)
      if (!isBoxMap(map)) return undefined
      return map as BoxMap<T>
    }
    const list = listConverter(tConverter).fromAttribute(value)
    if (list === undefined || list.length === 0) return undefined
    // values defined as array
    if (list.length > 1) return list
    // values defined as single value
    return list[0]
  },
  toAttribute: (value: Box<T> | undefined): unknown => {
    if (value === undefined || value === null) return undefined
    if (isBoxMap(value)) return mapConverter(tConverter).toAttribute(value as Map<T>)
    if (Array.isArray(value)) {
      return listConverter(tConverter).toAttribute(value)
    }
    return tConverter.toAttribute(value as T)
  }
})

export const boxAsBoxMap = <T>(value?: Box<T>): BoxMap<T> | undefined => {
  if (value === undefined || value === null) return undefined
  if (isBoxMap(value)) return value as BoxMap<T>
  if (Array.isArray(value)) {
    const [v1, v2, v3, v4] = value
    return {
      top: v1,
      left: v4 || v2 || v1,
      right: v2 || v1,
      bottom: v3 || v1
    }
  }
  return value as T
}
