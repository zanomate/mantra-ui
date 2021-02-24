import { AttributeConverter } from '../types/AttributeConverter'
import { ToCss } from '../types/ToCss'

export type Size = number | string

export const SizeConverter: AttributeConverter<Size> = {
  fromAttribute(value?: string | null): Size | undefined {
    if (value === undefined || value === null || value === '') return undefined
    const num = Number(value)
    if (isNaN(num)) return value
    return num
  },
  toAttribute(value?: Size | undefined): unknown {
    if (value === undefined || value === null || value === '') return undefined
    return String(value)
  }
}

export const sizeToCss: ToCss<Size> = value => {
  if (value === undefined || value === null || value === '') return 'unset'
  if (typeof value === 'number') return `${value}px`
  return value
}
