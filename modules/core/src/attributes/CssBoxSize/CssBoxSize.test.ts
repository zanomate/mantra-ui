import { CssBoxSize } from './CssBoxSize'

describe('CssBoxSize', () => {
  describe('parse()', () => {
    it('accept falsy values', () => {
      expect(CssBoxSize.parse(undefined)).toEqual(undefined)
      expect(CssBoxSize.parse('')).toEqual(undefined)
    })

    it('accept numeric values', () => {
      expect(CssBoxSize.parse('123')).toEqual([123])
      expect(CssBoxSize.parse('123.45')).toEqual([123.45])
    })

    it('accept string values', () => {
      expect(CssBoxSize.parse('value')).toEqual(['value'])
      expect(CssBoxSize.parse('100%')).toEqual(['100%'])
      expect(CssBoxSize.parse('50vh')).toEqual(['50vh'])
    })

    it('accept multiple values', () => {
      expect(CssBoxSize.parse('100% 123 50vh 123.45')).toEqual(['100%', 123, '50vh', 123.45])
    })
  })

  describe('toCss()', () => {
    it('accept falsy values', () => {
      expect(CssBoxSize.toCss(undefined)).toEqual('unset')
      expect(CssBoxSize.toCss([])).toEqual('unset')
    })

    it('accept numeric values', () => {
      expect(CssBoxSize.toCss([123])).toEqual('123px')
      expect(CssBoxSize.toCss([123.45])).toEqual('123.45px')
    })

    it('accept string values', () => {
      expect(CssBoxSize.toCss(['value'])).toEqual('value')
      expect(CssBoxSize.toCss(['100%'])).toEqual('100%')
      expect(CssBoxSize.toCss(['50vh'])).toEqual('50vh')
    })

    it('accept multiple values', () => {
      expect(CssBoxSize.toCss(['100%', 123, '50vh', 123.45])).toEqual('100% 123px 50vh 123.45px')
    })
  })
})
