import { ListConverter } from './List'

describe('ListConverter', () => {
  describe('fromAttribute()', () => {
    it('ignore falsy values', () => {
      expect(ListConverter.fromAttribute(null)).toEqual(undefined)
      expect(ListConverter.fromAttribute('')).toEqual(undefined)
    })

    it('accept single value', () => {
      expect(ListConverter.fromAttribute('plain')).toEqual(['plain'])
      expect(ListConverter.fromAttribute('kebab-case')).toEqual(['kebab-case'])
      expect(ListConverter.fromAttribute('camelCase')).toEqual(['camelCase'])
      expect(ListConverter.fromAttribute('-Mixed-Case')).toEqual(['-Mixed-Case'])
      expect(ListConverter.fromAttribute('_snake_case')).toEqual(['_snake_case'])
      expect(ListConverter.fromAttribute('dot.case')).toEqual(['dot.case'])
      expect(ListConverter.fromAttribute('123')).toEqual(['123'])
    })

    it('ignore spaces around value', () => {
      expect(ListConverter.fromAttribute(' value ')).toEqual(['value'])
      expect(ListConverter.fromAttribute('  value   ')).toEqual(['value'])
    })

    it('accept multiple values', () => {
      expect(ListConverter.fromAttribute('value1 value2')).toEqual(['value1', 'value2'])
      expect(ListConverter.fromAttribute('kebab-case -Mixed-Case _snake_case 123')).toEqual(['kebab-case', '-Mixed-Case', '_snake_case', '123'])
    })

    it('ignore additional spaces between values', () => {
      expect(ListConverter.fromAttribute('value1  value2')).toEqual(['value1', 'value2'])
      expect(ListConverter.fromAttribute(' value1  value2   ')).toEqual(['value1', 'value2'])
    })
  })

  describe('toAttribute()', () => {
    it('ignore falsy values', () => {
      expect(ListConverter.toAttribute(undefined)).toEqual(undefined)
      expect(ListConverter.toAttribute([])).toEqual(undefined)
    })

    it('accept single value', () => {
      expect(ListConverter.toAttribute(['plain'])).toEqual('plain')
      expect(ListConverter.toAttribute(['kebab-case'])).toEqual('kebab-case')
      expect(ListConverter.toAttribute(['camelCase'])).toEqual('camelCase')
      expect(ListConverter.toAttribute(['-Mixed-Case'])).toEqual('-Mixed-Case')
      expect(ListConverter.toAttribute(['_snake_case'])).toEqual('_snake_case')
      expect(ListConverter.toAttribute(['dot.case'])).toEqual('dot.case')
      expect(ListConverter.toAttribute(['123'])).toEqual('123')
    })

    it('ignore spaces around value', () => {
      expect(ListConverter.toAttribute([' value '])).toEqual('value')
      expect(ListConverter.toAttribute(['  value   '])).toEqual('value')
    })

    it('accept multiple values', () => {
      expect(ListConverter.toAttribute(['value1', 'value2'])).toEqual('value1 value2')
      expect(ListConverter.toAttribute(['kebab-case', '-Mixed-Case', '_snake_case', '123'])).toEqual('kebab-case -Mixed-Case _snake_case 123')
    })

    it('ignore additional spaces between values', () => {
      expect(ListConverter.toAttribute([' value1 ', '  value2   '])).toEqual('value1 value2')
    })
  })
})
