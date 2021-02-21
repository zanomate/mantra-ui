/* eslint-disable quote-props */
import { MapConverter } from './Map'

describe('MapConverter', () => {
  describe('fromAttribute()', () => {
    it('ignore falsy values', () => {
      expect(MapConverter.fromAttribute(null)).toEqual(undefined)
      expect(MapConverter.fromAttribute('')).toEqual(undefined)
    })

    it('accept properties without values', () => {
      expect(MapConverter.fromAttribute('property')).toEqual({ 'property': '' })
      expect(MapConverter.fromAttribute('property:')).toEqual({ 'property': '' })
    })

    it('ignore spaces around property name', () => {
      expect(MapConverter.fromAttribute(' property ')).toEqual({ 'property': '' })
      expect(MapConverter.fromAttribute('  property   ')).toEqual({ 'property': '' })
    })

    it('accept properties with any names', () => {
      expect(MapConverter.fromAttribute('plain')).toEqual({ 'plain': '' })
      expect(MapConverter.fromAttribute('kebab-case')).toEqual({ 'kebab-case': '' })
      expect(MapConverter.fromAttribute('camelCase')).toEqual({ 'camelCase': '' })
      expect(MapConverter.fromAttribute('-Mixed-Case')).toEqual({ '-Mixed-Case': '' })
      expect(MapConverter.fromAttribute('_snake_case')).toEqual({ '_snake_case': '' })
      expect(MapConverter.fromAttribute('dot.case')).toEqual({ 'dot.case': '' })
      expect(MapConverter.fromAttribute('with spaces')).toEqual({ 'with spaces': '' })
      expect(MapConverter.fromAttribute('123')).toEqual({ '123': '' })
    })

    it('accept properties with any values', () => {
      expect(MapConverter.fromAttribute('property:plain')).toEqual({ 'property': 'plain' })
      expect(MapConverter.fromAttribute('property:kebab-case')).toEqual({ 'property': 'kebab-case' })
      expect(MapConverter.fromAttribute('property:camelCase')).toEqual({ 'property': 'camelCase' })
      expect(MapConverter.fromAttribute('property:-Mixed-Case')).toEqual({ 'property': '-Mixed-Case' })
      expect(MapConverter.fromAttribute('property:_snake_case')).toEqual({ 'property': '_snake_case' })
      expect(MapConverter.fromAttribute('property:dot.case')).toEqual({ 'property': 'dot.case' })
      expect(MapConverter.fromAttribute('property:with spaces')).toEqual({ 'property': 'with spaces' })
      expect(MapConverter.fromAttribute('property:123')).toEqual({ 'property': '123' })
    })

    it('ignore spaces around value', () => {
      expect(MapConverter.fromAttribute('property: value ')).toEqual({ 'property': 'value' })
      expect(MapConverter.fromAttribute('property:  value   ')).toEqual({ 'property': 'value' })
    })

    it('parse multiple properties', () => {
      expect(MapConverter.fromAttribute('background-color: red; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
    })

    it('ignore invalid properties', () => {
      expect(MapConverter.fromAttribute('background-color: red; ; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
      expect(MapConverter.fromAttribute('background-color: red; :; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
      expect(MapConverter.fromAttribute('background-color: red;: ; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
      expect(MapConverter.fromAttribute('background-color: red;: value ; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
    })
  })

  describe('toAttribute()', () => {
    it('accept falsy values', () => {
      expect(MapConverter.toAttribute(undefined)).toEqual(undefined)
      expect(MapConverter.toAttribute({})).toEqual(undefined)
    })

    it('accept properties without values', () => {
      expect(MapConverter.toAttribute({ 'property': undefined })).toEqual(undefined)
      expect(MapConverter.toAttribute({ 'property': '' })).toEqual(undefined)
    })

    it('accept string-indexed properties', () => {
      expect(MapConverter.toAttribute({ 'plain': 'value' })).toEqual('plain:value')
      expect(MapConverter.toAttribute({ 'kebab-case': 'value' })).toEqual('kebab-case:value')
      expect(MapConverter.toAttribute({ 'camelCase': 'value' })).toEqual('camelCase:value')
      expect(MapConverter.toAttribute({ '-Mixed-Case': 'value' })).toEqual('-Mixed-Case:value')
      expect(MapConverter.toAttribute({ '_snake_case': 'value' })).toEqual('_snake_case:value')
      expect(MapConverter.toAttribute({ 'dot.case': 'value' })).toEqual('dot.case:value')
      expect(MapConverter.toAttribute({ 'with spaces': 'value' })).toEqual('with spaces:value')
    })

    it('accept number-indexed properties', () => {
      expect(MapConverter.toAttribute({ 0: 'value' })).toEqual('0:value')
      expect(MapConverter.toAttribute({ 123: 'value' })).toEqual('123:value')
    })

    it('accept properties with string values', () => {
      expect(MapConverter.toAttribute({ 'property': 'plain' })).toEqual('property:plain')
      expect(MapConverter.toAttribute({ 'property': 'kebab-case' })).toEqual('property:kebab-case')
      expect(MapConverter.toAttribute({ 'property': 'camelCase' })).toEqual('property:camelCase')
      expect(MapConverter.toAttribute({ 'property': '-Mixed-Case' })).toEqual('property:-Mixed-Case')
      expect(MapConverter.toAttribute({ 'property': '_snake_case' })).toEqual('property:_snake_case')
      expect(MapConverter.toAttribute({ 'property': 'dot.case' })).toEqual('property:dot.case')
      expect(MapConverter.toAttribute({ 'property': 'with spaces' })).toEqual('property:with spaces')
    })

    it('accept properties with numeric values', () => {
      expect(MapConverter.toAttribute({ 'property': 0 })).toEqual('property:0')
      expect(MapConverter.toAttribute({ 'property': 123 })).toEqual('property:123')
      expect(MapConverter.toAttribute({ 'property': 123.45 })).toEqual('property:123.45')
    })

    it('accept properties with boolean values', () => {
      expect(MapConverter.toAttribute({ 'property': true })).toEqual('property:true')
      expect(MapConverter.toAttribute({ 'property': false })).toEqual('property:false')
    })

    it('ignore spaces around property name', () => {
      expect(MapConverter.toAttribute({ ' property ': 'value' })).toEqual('property:value')
      expect(MapConverter.toAttribute({ '  property   ': 'value' })).toEqual('property:value')
    })

    it('ignore spaces around value', () => {
      expect(MapConverter.toAttribute({ 'property': ' value ' })).toEqual('property:value')
      expect(MapConverter.toAttribute({ 'property': '  value   ' })).toEqual('property:value')
    })

    it('stringify multiple properties', () => {
      expect(MapConverter.toAttribute({ 'background-color': 'red', 'color': 'green' })).toEqual('background-color:red; color:green')
    })
  })
})
