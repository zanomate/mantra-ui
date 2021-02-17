import { FlexBasis } from './FlexBasis'

describe('FlexBasis', () => {
  describe('parse()', () => {
    it('ignore falsy values', () => {
      expect(FlexBasis.parse(undefined)).toEqual(undefined)
      expect(FlexBasis.parse('')).toEqual(undefined)
    })

    it('accept special values', () => {
      expect(FlexBasis.parse(FlexBasis.SpecialValue.AUTO)).toEqual(FlexBasis.SpecialValue.AUTO)
      expect(FlexBasis.parse(FlexBasis.SpecialValue.CONTENT)).toEqual(FlexBasis.SpecialValue.CONTENT)
    })

    it('accept string values', () => {
      expect(FlexBasis.parse('plain')).toEqual('plain')
      expect(FlexBasis.parse('kebab-case')).toEqual('kebab-case')
      expect(FlexBasis.parse('camelCase')).toEqual('camelCase')
      expect(FlexBasis.parse('-Mixed-Case')).toEqual('-Mixed-Case')
      expect(FlexBasis.parse('_snake_case')).toEqual('_snake_case')
      expect(FlexBasis.parse('dot.case')).toEqual('dot.case')
    })

    it('accept numeric values', () => {
      expect(FlexBasis.parse('123')).toEqual(123)
      expect(FlexBasis.parse('123.45')).toEqual(123.45)
    })

    it('ignore spaces', () => {
      expect(FlexBasis.parse(' ')).toEqual(undefined)
      expect(FlexBasis.parse('   ')).toEqual(undefined)
      expect(FlexBasis.parse(' value ')).toEqual('value')
      expect(FlexBasis.parse('  value   ')).toEqual('value')
      expect(FlexBasis.parse('  123   ')).toEqual(123)
    })
  })

  describe('toCss()', () => {
    it('ignore falsy values', () => {
      expect(FlexBasis.toCss(undefined)).toEqual('unset')
    })

    it('accept special values', () => {
      expect(FlexBasis.toCss(FlexBasis.SpecialValue.AUTO)).toEqual(FlexBasis.SpecialValue.AUTO)
      expect(FlexBasis.toCss(FlexBasis.SpecialValue.CONTENT)).toEqual(FlexBasis.SpecialValue.CONTENT)
    })

    it('accept string values', () => {
      expect(FlexBasis.toCss(FlexBasis.SpecialValue.AUTO)).toEqual(FlexBasis.SpecialValue.AUTO)
      expect(FlexBasis.toCss(FlexBasis.SpecialValue.CONTENT)).toEqual(FlexBasis.SpecialValue.CONTENT)
      expect(FlexBasis.toCss('plain')).toEqual('plain')
      expect(FlexBasis.toCss('kebab-case')).toEqual('kebab-case')
      expect(FlexBasis.toCss('camelCase')).toEqual('camelCase')
      expect(FlexBasis.toCss('-Mixed-Case')).toEqual('-Mixed-Case')
      expect(FlexBasis.toCss('_snake_case')).toEqual('_snake_case')
      expect(FlexBasis.toCss('dot.case')).toEqual('dot.case')
    })

    it('accept numeric values', () => {
      expect(FlexBasis.toCss(123)).toEqual('123')
      expect(FlexBasis.toCss(123.45)).toEqual('123.45')
    })

    it('ignore spaces', () => {
      expect(FlexBasis.toCss(' ')).toEqual('unset')
      expect(FlexBasis.toCss('   ')).toEqual('unset')
      expect(FlexBasis.toCss(' value ')).toEqual('value')
      expect(FlexBasis.toCss('  value   ')).toEqual('value')
    })
  })
})
