import { AttributeConverter } from '../../types/AttributeConverter'

export const StringConverter: AttributeConverter<string> = {
  fromAttribute: (value?: string | null): string | undefined => {
    if (value === undefined || value === null) return undefined
    return String(value)
  },
  toAttribute: (value?: string | undefined): unknown => {
    if (value === undefined || value === null) return undefined
    return String(value)
  }
}
