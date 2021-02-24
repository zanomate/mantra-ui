export interface AttributeConverter<T> {
  fromAttribute: (value?: string | null) => T | undefined
  toAttribute: (value?: T | undefined) => unknown
}
