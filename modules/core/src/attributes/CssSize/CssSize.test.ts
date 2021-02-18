import { CssSize } from './CssSize'

describe('CssSize', () => {
  describe('parse()', () => {
    it('accept falsy values', () => {
      expect(CssSize.parse(undefined)).toEqual(undefined)
      expect(CssSize.parse('')).toEqual(undefined)
    })

    it('accept numeric values', () => {
      expect(CssSize.parse('123')).toEqual(123)
      expect(CssSize.parse('123.45')).toEqual(123.45)
    })

    it('accept string values', () => {
      expect(CssSize.parse('value')).toEqual('value')
      expect(CssSize.parse('100%')).toEqual('100%')
      expect(CssSize.parse('50vh')).toEqual('50vh')
    })
  })

  describe('toCss()', () => {
    it('accept falsy values', () => {
      expect(CssSize.toCss(undefined)).toEqual('unset')
      expect(CssSize.toCss('')).toEqual('unset')
    })

    it('accept numeric values', () => {
      expect(CssSize.toCss(123)).toEqual('123px')
      expect(CssSize.toCss(123.45)).toEqual('123.45px')
    })

    it('accept string values', () => {
      expect(CssSize.toCss('value')).toEqual('value')
      expect(CssSize.toCss('100%')).toEqual('100%')
      expect(CssSize.toCss('50vh')).toEqual('50vh')
    })
  })
})
