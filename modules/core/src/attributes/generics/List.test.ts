import { StringConverter } from '../base/String'
import { listConverter } from './List'

const GenericListConverter = listConverter(StringConverter)

describe('List', () => {
  describe('ListConverter', () => {
    describe('fromAttribute()', () => {
      it('ignore falsy values', () => {
        expect(GenericListConverter.fromAttribute(null)).toEqual(undefined)
        expect(GenericListConverter.fromAttribute('')).toEqual(undefined)
      })

      it('accept single value', () => {
        expect(GenericListConverter.fromAttribute('plain')).toEqual(['plain'])
        expect(GenericListConverter.fromAttribute('kebab-case')).toEqual(['kebab-case'])
        expect(GenericListConverter.fromAttribute('camelCase')).toEqual(['camelCase'])
        expect(GenericListConverter.fromAttribute('-Mixed-Case')).toEqual(['-Mixed-Case'])
        expect(GenericListConverter.fromAttribute('_snake_case')).toEqual(['_snake_case'])
        expect(GenericListConverter.fromAttribute('dot.case')).toEqual(['dot.case'])
        expect(GenericListConverter.fromAttribute('123')).toEqual(['123'])
      })

      it('ignore spaces around value', () => {
        expect(GenericListConverter.fromAttribute(' value ')).toEqual(['value'])
        expect(GenericListConverter.fromAttribute('  value   ')).toEqual(['value'])
      })

      it('accept multiple values', () => {
        expect(GenericListConverter.fromAttribute('value1 value2')).toEqual(['value1', 'value2'])
        expect(GenericListConverter.fromAttribute('kebab-case -Mixed-Case _snake_case 123')).toEqual(['kebab-case', '-Mixed-Case', '_snake_case', '123'])
      })

      it('ignore additional spaces between values', () => {
        expect(GenericListConverter.fromAttribute('value1  value2')).toEqual(['value1', 'value2'])
        expect(GenericListConverter.fromAttribute(' value1  value2   ')).toEqual(['value1', 'value2'])
      })
    })

    describe('toAttribute()', () => {
      it('ignore falsy values', () => {
        expect(GenericListConverter.toAttribute(undefined)).toEqual(undefined)
        expect(GenericListConverter.toAttribute([])).toEqual(undefined)
      })

      it('accept single value', () => {
        expect(GenericListConverter.toAttribute(['plain'])).toEqual('plain')
        expect(GenericListConverter.toAttribute(['kebab-case'])).toEqual('kebab-case')
        expect(GenericListConverter.toAttribute(['camelCase'])).toEqual('camelCase')
        expect(GenericListConverter.toAttribute(['-Mixed-Case'])).toEqual('-Mixed-Case')
        expect(GenericListConverter.toAttribute(['_snake_case'])).toEqual('_snake_case')
        expect(GenericListConverter.toAttribute(['dot.case'])).toEqual('dot.case')
        expect(GenericListConverter.toAttribute(['123'])).toEqual('123')
      })

      it('ignore spaces around value', () => {
        expect(GenericListConverter.toAttribute([' value '])).toEqual('value')
        expect(GenericListConverter.toAttribute(['  value   '])).toEqual('value')
      })

      it('accept multiple values', () => {
        expect(GenericListConverter.toAttribute(['value1', 'value2'])).toEqual('value1 value2')
        expect(GenericListConverter.toAttribute(['kebab-case', '-Mixed-Case', '_snake_case', '123'])).toEqual('kebab-case -Mixed-Case _snake_case 123')
      })

      it('ignore additional spaces between values', () => {
        expect(GenericListConverter.toAttribute([' value1 ', '  value2   '])).toEqual('value1 value2')
      })
    })
  })
})
