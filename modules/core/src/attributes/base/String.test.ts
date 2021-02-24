import { StringConverter } from './String'

describe('String', () => {
  describe('StringConverter', () => {
    describe('fromAttribute()', () => {
      it('ignore falsy values', () => {
        expect(StringConverter.fromAttribute(undefined)).toEqual(undefined)
        expect(StringConverter.fromAttribute(null)).toEqual(undefined)
      })

      it('accept string values', () => {
        expect(StringConverter.fromAttribute('')).toEqual('')
        expect(StringConverter.fromAttribute('plain')).toEqual('plain')
        expect(StringConverter.fromAttribute('kebab-case')).toEqual('kebab-case')
        expect(StringConverter.fromAttribute('camelCase')).toEqual('camelCase')
        expect(StringConverter.fromAttribute('-Mixed-Case')).toEqual('-Mixed-Case')
        expect(StringConverter.fromAttribute('_snake_case')).toEqual('_snake_case')
        expect(StringConverter.fromAttribute('dot.case')).toEqual('dot.case')
        expect(StringConverter.fromAttribute('with spaces')).toEqual('with spaces')
        expect(StringConverter.fromAttribute('0')).toEqual('0')
        expect(StringConverter.fromAttribute('123')).toEqual('123')
        expect(StringConverter.fromAttribute('123.45')).toEqual('123.45')
        expect(StringConverter.fromAttribute('1.23e+2')).toEqual('1.23e+2')
      })

      it('accept spaces', () => {
        expect(StringConverter.fromAttribute(' ')).toEqual(' ')
        expect(StringConverter.fromAttribute('   ')).toEqual('   ')
      })

      it('accept spaces around values', () => {
        expect(StringConverter.fromAttribute(' ')).toEqual(' ')
        expect(StringConverter.fromAttribute('   ')).toEqual('   ')
        expect(StringConverter.fromAttribute(' value ')).toEqual(' value ')
        expect(StringConverter.fromAttribute('  value   ')).toEqual('  value   ')
      })
    })

    describe('toAttribute()', () => {
      it('ignore falsy values', () => {
        expect(StringConverter.toAttribute(undefined)).toEqual(undefined)
        expect(StringConverter.toAttribute(null)).toEqual(undefined)
      })

      it('accept string values', () => {
        expect(StringConverter.toAttribute('')).toEqual('')
        expect(StringConverter.toAttribute('plain')).toEqual('plain')
        expect(StringConverter.toAttribute('kebab-case')).toEqual('kebab-case')
        expect(StringConverter.toAttribute('camelCase')).toEqual('camelCase')
        expect(StringConverter.toAttribute('-Mixed-Case')).toEqual('-Mixed-Case')
        expect(StringConverter.toAttribute('_snake_case')).toEqual('_snake_case')
        expect(StringConverter.toAttribute('dot.case')).toEqual('dot.case')
        expect(StringConverter.toAttribute('with spaces')).toEqual('with spaces')
        expect(StringConverter.toAttribute('0')).toEqual('0')
        expect(StringConverter.toAttribute('123')).toEqual('123')
        expect(StringConverter.toAttribute('123.45')).toEqual('123.45')
        expect(StringConverter.toAttribute('1.23e+2')).toEqual('1.23e+2')
      })

      it('accept spaces', () => {
        expect(StringConverter.toAttribute(' ')).toEqual(' ')
        expect(StringConverter.toAttribute('   ')).toEqual('   ')
      })

      it('accept spaces around values', () => {
        expect(StringConverter.toAttribute(' ')).toEqual(' ')
        expect(StringConverter.toAttribute('   ')).toEqual('   ')
        expect(StringConverter.toAttribute(' value ')).toEqual(' value ')
        expect(StringConverter.toAttribute('  value   ')).toEqual('  value   ')
      })
    })
  })
})
