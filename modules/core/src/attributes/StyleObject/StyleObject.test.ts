/* eslint-disable quote-props */
import { StyleObject } from './StyleObject'

const checkParse = (input: any, expected: StyleObject.Type) => {
  const parsed = StyleObject.parse(input)
  expect(parsed).toEqual(expected)
}

const checkStringify = (input: any, expected: string) => {
  const string = StyleObject.stringify(input)
  expect(string).toEqual(expected)
}

describe('StyleAttribute', () => {
  describe('parseStyleAttribute()', () => {
    it('accept falsy values', () => {
      checkParse(undefined, {})
      checkParse(null, {})
      checkParse('', {})
    })

    it('accept properties without values', () => {
      checkParse('property', { 'property': '' })
      checkParse('property:', { 'property': '' })
    })

    it('ignore spaces around property name', () => {
      checkParse(' property ', { 'property': '' })
      checkParse(' property   ', { 'property': '' })
    })

    it('accept properties with any names', () => {
      checkParse('plain', { 'plain': '' })
      checkParse('kebab-case', { 'kebab-case': '' })
      checkParse('camelCase', { 'camelCase': '' })
      checkParse('-Mixed-Case', { '-Mixed-Case': '' })
      checkParse('_snake_case', { '_snake_case': '' })
      checkParse('dot.case', { 'dot.case': '' })
      checkParse('with spaces', { 'with spaces': '' })
      checkParse('123', { '123': '' })
    })

    it('accept properties with any values', () => {
      checkParse('property:plain', { 'property': 'plain' })
      checkParse('property:kebab-case', { 'property': 'kebab-case' })
      checkParse('property:camelCase', { 'property': 'camelCase' })
      checkParse('property:-Mixed-Case', { 'property': '-Mixed-Case' })
      checkParse('property:_snake_case', { 'property': '_snake_case' })
      checkParse('property:dot.case', { 'property': 'dot.case' })
      checkParse('property:with spaces', { 'property': 'with spaces' })
      checkParse('property:123', { 'property': '123' })
    })

    it('ignore spaces around value', () => {
      checkParse('property: value ', { 'property': 'value' })
      checkParse('property:  value   ', { 'property': 'value' })
    })

    it('parse multiple properties', () => {
      checkParse('background-color: red; color: green', { 'background-color': 'red', 'color': 'green' })
    })

    it('ignore invalid properties', () => {
      checkParse('background-color: red; ; color: green', { 'background-color': 'red', 'color': 'green' })
      checkParse('background-color: red; :; color: green', { 'background-color': 'red', 'color': 'green' })
      checkParse('background-color: red;: ; color: green', { 'background-color': 'red', 'color': 'green' })
      checkParse('background-color: red;: value; color: green', { 'background-color': 'red', 'color': 'green' })
    })
  })

  describe('stringifyStyleAttribute()', () => {
    it('accept falsy values', () => {
      checkStringify(undefined, '')
      checkStringify(null, '')
      checkStringify({}, '')
    })

    it('accept properties without values', () => {
      checkStringify({ 'property': undefined }, '')
      checkStringify({ 'property': null }, '')
      checkStringify({ 'property': '' }, '')
    })

    it('accept string-indexed properties', () => {
      checkStringify({ 'plain': 'value' }, 'plain:value')
      checkStringify({ 'kebab-case': 'value' }, 'kebab-case:value')
      checkStringify({ 'camelCase': 'value' }, 'camelCase:value')
      checkStringify({ '-Mixed-Case': 'value' }, '-Mixed-Case:value')
      checkStringify({ '_snake_case': 'value' }, '_snake_case:value')
      checkStringify({ 'dot.case': 'value' }, 'dot.case:value')
      checkStringify({ 'with spaces': 'value' }, 'with spaces:value')
    })

    it('accept number-indexed properties', () => {
      checkStringify({ 0: 'value' }, '0:value')
      checkStringify({ 123: 'value' }, '123:value')
    })

    it('accept properties with string values', () => {
      checkStringify({ 'property': 'plain' }, 'property:plain')
      checkStringify({ 'property': 'kebab-case' }, 'property:kebab-case')
      checkStringify({ 'property': 'camelCase' }, 'property:camelCase')
      checkStringify({ 'property': '-Mixed-Case' }, 'property:-Mixed-Case')
      checkStringify({ 'property': '_snake_case' }, 'property:_snake_case')
      checkStringify({ 'property': 'dot.case' }, 'property:dot.case')
      checkStringify({ 'property': 'with spaces' }, 'property:with spaces')
    })

    it('accept properties with numeric values', () => {
      checkStringify({ 'property': 0 }, 'property:0')
      checkStringify({ 'property': 123 }, 'property:123')
      checkStringify({ 'property': 123.45 }, 'property:123.45')
    })

    it('accept properties with boolean values', () => {
      checkStringify({ 'property': true }, 'property:true')
      checkStringify({ 'property': false }, 'property:false')
    })

    it('ignore spaces around property name', () => {
      checkStringify({ ' property ': 'value' }, 'property:value')
    })

    it('ignore spaces around value', () => {
      checkStringify({ 'property': ' value ' }, 'property:value')
      checkStringify({ 'property': '  value   ' }, 'property:value')
    })

    it('stringify multiple properties', () => {
      checkStringify({ 'background-color': 'red', 'color': 'green' }, 'background-color:red;color:green')
    })
  })
})
