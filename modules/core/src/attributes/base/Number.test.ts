import { NumberConverter } from './Number'

describe('Number', () => {
  describe('NumberConverter', () => {
    describe('fromAttribute()', () => {
      it('ignore falsy values', () => {
        expect(NumberConverter.fromAttribute(undefined)).toEqual(undefined)
        expect(NumberConverter.fromAttribute(null)).toEqual(undefined)
        expect(NumberConverter.fromAttribute('')).toEqual(undefined)
      })

      it('accept numeric values', () => {
        expect(NumberConverter.fromAttribute('0')).toEqual(0)
        expect(NumberConverter.fromAttribute('123')).toEqual(123)
        expect(NumberConverter.fromAttribute('123.45')).toEqual(123.45)
        expect(NumberConverter.fromAttribute('1.23e+2')).toEqual(123)
      })

      it('ignore non-numeric values', () => {
        expect(NumberConverter.fromAttribute('plain')).toEqual(undefined)
        expect(NumberConverter.fromAttribute('kebab-case')).toEqual(undefined)
        expect(NumberConverter.fromAttribute('camelCase')).toEqual(undefined)
        expect(NumberConverter.fromAttribute('-Mixed-Case')).toEqual(undefined)
        expect(NumberConverter.fromAttribute('_snake_case')).toEqual(undefined)
        expect(NumberConverter.fromAttribute('dot.case')).toEqual(undefined)
        expect(NumberConverter.fromAttribute('with spaces')).toEqual(undefined)
      })
    })

    describe('toAttribute()', () => {
      it('ignore falsy values, except 0', () => {
        expect(NumberConverter.toAttribute(undefined)).toEqual(undefined)
        expect(NumberConverter.toAttribute(null)).toEqual(undefined)
      })

      it('accept numeric values', () => {
        expect(NumberConverter.toAttribute(0)).toEqual('0')
        expect(NumberConverter.toAttribute(123)).toEqual('123')
        expect(NumberConverter.toAttribute(123.45)).toEqual('123.45')
        expect(NumberConverter.toAttribute(1.23e+2)).toEqual('123')
      })
    })
  })
})
