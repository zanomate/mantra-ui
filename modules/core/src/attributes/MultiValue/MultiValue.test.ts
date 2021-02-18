import { MultiValue } from './MultiValue'

describe('MultiValue', () => {
  describe('parse()', () => {
    it('accept falsy values', () => {
      expect(MultiValue.parse(undefined)).toEqual(undefined)
      expect(MultiValue.parse('')).toEqual(undefined)
    })

    it('accept single value', () => {
      expect(MultiValue.parse('plain')).toEqual(['plain'])
      expect(MultiValue.parse('kebab-case')).toEqual(['kebab-case'])
      expect(MultiValue.parse('camelCase')).toEqual(['camelCase'])
      expect(MultiValue.parse('-Mixed-Case')).toEqual(['-Mixed-Case'])
      expect(MultiValue.parse('_snake_case')).toEqual(['_snake_case'])
      expect(MultiValue.parse('dot.case')).toEqual(['dot.case'])
      expect(MultiValue.parse('123')).toEqual(['123'])
    })

    it('ignore spaces around value', () => {
      expect(MultiValue.parse(' value ')).toEqual(['value'])
      expect(MultiValue.parse('  value   ')).toEqual(['value'])
    })

    it('accept multiple values', () => {
      expect(MultiValue.parse('value1 value2')).toEqual(['value1', 'value2'])
      expect(MultiValue.parse('kebab-case -Mixed-Case _snake_case 123')).toEqual(['kebab-case', '-Mixed-Case', '_snake_case', '123'])
    })

    it('ignore additional spaces between values', () => {
      expect(MultiValue.parse('value1  value2')).toEqual(['value1', 'value2'])
      expect(MultiValue.parse(' value1  value2   ')).toEqual(['value1', 'value2'])
    })
  })

  describe('stringify()', () => {
    it('accept falsy values', () => {
      expect(MultiValue.stringify(undefined)).toEqual('')
      expect(MultiValue.stringify([])).toEqual('')
    })

    it('accept single value', () => {
      expect(MultiValue.stringify(['plain'])).toEqual('plain')
      expect(MultiValue.stringify(['kebab-case'])).toEqual('kebab-case')
      expect(MultiValue.stringify(['camelCase'])).toEqual('camelCase')
      expect(MultiValue.stringify(['-Mixed-Case'])).toEqual('-Mixed-Case')
      expect(MultiValue.stringify(['_snake_case'])).toEqual('_snake_case')
      expect(MultiValue.stringify(['dot.case'])).toEqual('dot.case')
      expect(MultiValue.stringify(['123'])).toEqual('123')
    })

    it('ignore spaces around value', () => {
      expect(MultiValue.stringify([' value '])).toEqual('value')
      expect(MultiValue.stringify(['  value   '])).toEqual('value')
    })

    it('accept multiple values', () => {
      expect(MultiValue.stringify(['value1', 'value2'])).toEqual('value1 value2')
      expect(MultiValue.stringify(['kebab-case', '-Mixed-Case', '_snake_case', '123'])).toEqual('kebab-case -Mixed-Case _snake_case 123')
    })

    it('ignore additional spaces between values', () => {
      expect(MultiValue.stringify([' value1 ', '  value2   '])).toEqual('value1 value2')
    })
  })
})
