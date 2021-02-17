import { FlexSize } from './FlexSize'

describe('FlexSize', () => {
  describe('parse()', () => {
    it('ignore falsy values', () => {
      expect(FlexSize.parse(undefined)).toEqual(undefined)
      expect(FlexSize.parse('')).toEqual(true)
    })

    it('accept boolean values', () => {
      expect(FlexSize.parse('true')).toEqual(true)
      expect(FlexSize.parse('false')).toEqual(false)
    })

    it('accept numeric values', () => {
      expect(FlexSize.parse('123')).toEqual(123)
      expect(FlexSize.parse('123.45')).toEqual(123.45)
    })

    it('ignore non-numeric values', () => {
      expect(FlexSize.parse('plain')).toEqual(undefined)
      expect(FlexSize.parse('kebab-case')).toEqual(undefined)
      expect(FlexSize.parse('camelCase')).toEqual(undefined)
      expect(FlexSize.parse('-Mixed-Case')).toEqual(undefined)
      expect(FlexSize.parse('_snake_case')).toEqual(undefined)
      expect(FlexSize.parse('dot.case')).toEqual(undefined)
    })
  })

  describe('toCss()', () => {
    it('accept falsy values', () => {
      expect(FlexSize.toCss(undefined)).toEqual('unset')
    })

    it('accept boolean values', () => {
      expect(FlexSize.toCss(true)).toEqual('1')
      expect(FlexSize.toCss(false)).toEqual('0')
    })

    it('accept numeric values', () => {
      expect(FlexSize.toCss(123)).toEqual('123')
      expect(FlexSize.toCss(123.45)).toEqual('123.45')
    })
  })
})
