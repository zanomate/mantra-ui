import { FlexWrap } from './FlexWrap'

describe('FlexWrap', () => {
  describe('parse()', () => {
    it('ignore falsy values', () => {
      expect(FlexWrap.parse(undefined)).toEqual(undefined)
      expect(FlexWrap.parse('')).toEqual(true)
    })

    it('accept boolean values', () => {
      expect(FlexWrap.parse('true')).toEqual(true)
      expect(FlexWrap.parse('false')).toEqual(false)
    })

    it('accept special values', () => {
      expect(FlexWrap.parse(FlexWrap.SpecialValue.REVERSE)).toEqual(FlexWrap.SpecialValue.REVERSE)
    })

    it('ignore non-numeric values', () => {
      expect(FlexWrap.parse('plain')).toEqual(undefined)
      expect(FlexWrap.parse('kebab-case')).toEqual(undefined)
      expect(FlexWrap.parse('camelCase')).toEqual(undefined)
      expect(FlexWrap.parse('-Mixed-Case')).toEqual(undefined)
      expect(FlexWrap.parse('_snake_case')).toEqual(undefined)
      expect(FlexWrap.parse('dot.case')).toEqual(undefined)
    })
  })

  describe('toCss()', () => {
    it('accept falsy values', () => {
      expect(FlexWrap.toCss(undefined)).toEqual('unset')
    })

    it('accept boolean values', () => {
      expect(FlexWrap.toCss(true)).toEqual('wrap')
      expect(FlexWrap.toCss(false)).toEqual('nowrap')
    })

    it('accept special values', () => {
      expect(FlexWrap.toCss(FlexWrap.SpecialValue.REVERSE)).toEqual('wrap-reverse')
    })
  })
})
