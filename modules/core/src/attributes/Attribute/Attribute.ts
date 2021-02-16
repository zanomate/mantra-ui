export namespace Attribute {
  export type Parse<T> = (value: string | undefined) => T
  export type Stringify<T> = (value: T | undefined) => string | undefined
  export type ToCss<T> = (value: T | undefined) => string
}
