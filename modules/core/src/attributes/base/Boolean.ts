import { AttributeConverter } from '../../types/AttributeConverter'

export const BooleanConverter: AttributeConverter<boolean> = {
  fromAttribute: (value?: string | null): boolean | undefined => {
    if (value === undefined) return undefined
    return Boolean(value)
  },
  toAttribute: (value?: boolean | undefined): unknown => {
    if (value === undefined) return undefined
    return value ? '' : undefined
  }
}
