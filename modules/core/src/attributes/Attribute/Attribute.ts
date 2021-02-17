export namespace Attribute {
  export type Parse<T> = (value?: any) => T | undefined
  export type Stringify<T> = (value?: T) => string | undefined
  export type ToCss<T, O = any> = (value?: T, options?: O) => string
}
