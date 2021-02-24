/* eslint-disable quote-props */
import { StringConverter } from '../base/String'
import { mapConverter } from './Map'

const GenericMapConverter = mapConverter(StringConverter)

describe('Map', () => {
  describe('MapConverter', () => {
    describe('fromAttribute()', () => {
      it('ignore falsy values', () => {
        expect(GenericMapConverter.fromAttribute(null)).toEqual(undefined)
        expect(GenericMapConverter.fromAttribute('')).toEqual(undefined)
      })

      it('accept properties without values', () => {
        expect(GenericMapConverter.fromAttribute('property')).toEqual({ 'property': '' })
        expect(GenericMapConverter.fromAttribute('property:')).toEqual({ 'property': '' })
      })

      it('ignore spaces around property name', () => {
        expect(GenericMapConverter.fromAttribute(' property ')).toEqual({ 'property': '' })
        expect(GenericMapConverter.fromAttribute('  property   ')).toEqual({ 'property': '' })
      })

      it('accept properties with any names', () => {
        expect(GenericMapConverter.fromAttribute('plain')).toEqual({ 'plain': '' })
        expect(GenericMapConverter.fromAttribute('kebab-case')).toEqual({ 'kebab-case': '' })
        expect(GenericMapConverter.fromAttribute('camelCase')).toEqual({ 'camelCase': '' })
        expect(GenericMapConverter.fromAttribute('-Mixed-Case')).toEqual({ '-Mixed-Case': '' })
        expect(GenericMapConverter.fromAttribute('_snake_case')).toEqual({ '_snake_case': '' })
        expect(GenericMapConverter.fromAttribute('dot.case')).toEqual({ 'dot.case': '' })
        expect(GenericMapConverter.fromAttribute('with spaces')).toEqual({ 'with spaces': '' })
        expect(GenericMapConverter.fromAttribute('123')).toEqual({ '123': '' })
      })

      it('accept properties with any values', () => {
        expect(GenericMapConverter.fromAttribute('property:plain')).toEqual({ 'property': 'plain' })
        expect(GenericMapConverter.fromAttribute('property:kebab-case')).toEqual({ 'property': 'kebab-case' })
        expect(GenericMapConverter.fromAttribute('property:camelCase')).toEqual({ 'property': 'camelCase' })
        expect(GenericMapConverter.fromAttribute('property:-Mixed-Case')).toEqual({ 'property': '-Mixed-Case' })
        expect(GenericMapConverter.fromAttribute('property:_snake_case')).toEqual({ 'property': '_snake_case' })
        expect(GenericMapConverter.fromAttribute('property:dot.case')).toEqual({ 'property': 'dot.case' })
        expect(GenericMapConverter.fromAttribute('property:with spaces')).toEqual({ 'property': 'with spaces' })
        expect(GenericMapConverter.fromAttribute('property:123')).toEqual({ 'property': '123' })
      })

      it('ignore spaces around value', () => {
        expect(GenericMapConverter.fromAttribute('property: value ')).toEqual({ 'property': 'value' })
        expect(GenericMapConverter.fromAttribute('property:  value   ')).toEqual({ 'property': 'value' })
      })

      it('accept multiple properties', () => {
        expect(GenericMapConverter.fromAttribute('background-color: red; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
      })

      it('ignore invalid properties', () => {
        expect(GenericMapConverter.fromAttribute('background-color: red; ; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
        expect(GenericMapConverter.fromAttribute('background-color: red; :; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
        expect(GenericMapConverter.fromAttribute('background-color: red;: ; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
        expect(GenericMapConverter.fromAttribute('background-color: red;: value ; color: green')).toEqual({ 'background-color': 'red', 'color': 'green' })
      })
    })

    describe('toAttribute()', () => {
      it('ignore falsy values', () => {
        expect(GenericMapConverter.toAttribute(undefined)).toEqual(undefined)
        expect(GenericMapConverter.toAttribute({})).toEqual(undefined)
      })

      it('ignore properties with undefined values', () => {
        expect(GenericMapConverter.toAttribute({ 'property': undefined })).toEqual(undefined)
        expect(GenericMapConverter.toAttribute({ 'property': undefined, 'otherProperty': 'other' })).toEqual('otherProperty:other')
      })

      it('accept properties without values', () => {
        expect(GenericMapConverter.toAttribute({ 'property': undefined })).toEqual(undefined)
        expect(GenericMapConverter.toAttribute({ 'property': '' })).toEqual('property:')
      })

      it('accept string-indexed properties', () => {
        expect(GenericMapConverter.toAttribute({ 'plain': 'value' })).toEqual('plain:value')
        expect(GenericMapConverter.toAttribute({ 'kebab-case': 'value' })).toEqual('kebab-case:value')
        expect(GenericMapConverter.toAttribute({ 'camelCase': 'value' })).toEqual('camelCase:value')
        expect(GenericMapConverter.toAttribute({ '-Mixed-Case': 'value' })).toEqual('-Mixed-Case:value')
        expect(GenericMapConverter.toAttribute({ '_snake_case': 'value' })).toEqual('_snake_case:value')
        expect(GenericMapConverter.toAttribute({ 'dot.case': 'value' })).toEqual('dot.case:value')
        expect(GenericMapConverter.toAttribute({ 'with spaces': 'value' })).toEqual('with spaces:value')
      })

      it('accept number-indexed properties', () => {
        expect(GenericMapConverter.toAttribute({ 0: 'value' })).toEqual('0:value')
        expect(GenericMapConverter.toAttribute({ 123: 'value' })).toEqual('123:value')
      })

      it('accept properties with string values', () => {
        expect(GenericMapConverter.toAttribute({ 'property': 'plain' })).toEqual('property:plain')
        expect(GenericMapConverter.toAttribute({ 'property': 'kebab-case' })).toEqual('property:kebab-case')
        expect(GenericMapConverter.toAttribute({ 'property': 'camelCase' })).toEqual('property:camelCase')
        expect(GenericMapConverter.toAttribute({ 'property': '-Mixed-Case' })).toEqual('property:-Mixed-Case')
        expect(GenericMapConverter.toAttribute({ 'property': '_snake_case' })).toEqual('property:_snake_case')
        expect(GenericMapConverter.toAttribute({ 'property': 'dot.case' })).toEqual('property:dot.case')
        expect(GenericMapConverter.toAttribute({ 'property': 'with spaces' })).toEqual('property:with spaces')
        expect(GenericMapConverter.toAttribute({ 'property': '0' })).toEqual('property:0')
        expect(GenericMapConverter.toAttribute({ 'property': '123' })).toEqual('property:123')
        expect(GenericMapConverter.toAttribute({ 'property': '123.45' })).toEqual('property:123.45')
        expect(GenericMapConverter.toAttribute({ 'property': '1.23e+2' })).toEqual('property:1.23e+2')
      })

      it('ignore spaces around property name', () => {
        expect(GenericMapConverter.toAttribute({ ' property ': 'value' })).toEqual('property:value')
        expect(GenericMapConverter.toAttribute({ '  property   ': 'value' })).toEqual('property:value')
      })

      it('ignore spaces around value', () => {
        expect(GenericMapConverter.toAttribute({ 'property': ' value ' })).toEqual('property:value')
        expect(GenericMapConverter.toAttribute({ 'property': '  value   ' })).toEqual('property:value')
      })

      it('accept multiple properties', () => {
        expect(GenericMapConverter.toAttribute({ 'background-color': 'red', 'color': 'green' })).toEqual('background-color:red; color:green')
      })

      it('ignore invalid properties', () => {
        expect(GenericMapConverter.toAttribute({ 'background-color': 'red', 'value': undefined, 'color': 'green' })).toEqual('background-color:red; color:green')
      })
    })
  })
})
