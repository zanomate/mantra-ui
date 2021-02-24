import { BooleanConverter } from './Boolean'

describe('Boolean', () => {
  describe('BooleanConverter', () => {
    describe('fromAttribute()', () => {
      it('ignore undefined values', () => {
        expect(BooleanConverter.fromAttribute(undefined)).toEqual(undefined)
      })

      it('accept falsy values', () => {
        expect(BooleanConverter.fromAttribute(null)).toEqual(false)
        expect(BooleanConverter.fromAttribute('')).toEqual(false)
      })

      it('accept truly values', () => {
        expect(BooleanConverter.fromAttribute('plain')).toEqual(true)
        expect(BooleanConverter.fromAttribute('kebab-case')).toEqual(true)
        expect(BooleanConverter.fromAttribute('camelCase')).toEqual(true)
        expect(BooleanConverter.fromAttribute('-Mixed-Case')).toEqual(true)
        expect(BooleanConverter.fromAttribute('_snake_case')).toEqual(true)
        expect(BooleanConverter.fromAttribute('dot.case')).toEqual(true)
        expect(BooleanConverter.fromAttribute('with spaces')).toEqual(true)
        expect(BooleanConverter.fromAttribute('123')).toEqual(true)
        expect(BooleanConverter.fromAttribute('123.45')).toEqual(true)
        expect(BooleanConverter.fromAttribute('1.23e+2')).toEqual(true)
      })
    })

    describe('toAttribute()', () => {
      it('ignore undefined values', () => {
        expect(BooleanConverter.toAttribute(undefined)).toEqual(undefined)
      })

      it('accept boolean values', () => {
        expect(BooleanConverter.toAttribute(true)).toEqual('')
        expect(BooleanConverter.toAttribute(false)).toEqual(undefined)
      })
    })
  })
})
