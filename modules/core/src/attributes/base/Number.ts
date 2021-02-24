import { AttributeConverter } from '../../types/AttributeConverter'

export const NumberConverter: AttributeConverter<number> = {
  fromAttribute: (value?: string | null): number | undefined => {
    if (value === undefined || value === null || value === '') return undefined
    const num = Number(value)
    if (isNaN(num)) return undefined
    return num
  },
  toAttribute: (value?: number | undefined): unknown => {
    if (value === undefined || value === null) return undefined
    return String(value)
  }
}
