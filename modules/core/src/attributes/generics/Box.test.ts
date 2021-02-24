/* eslint-disable quote-props */
import { StringConverter } from '../base/String'
import { boxConverter } from './Box'

const GenericBoxConverter = boxConverter(StringConverter)

describe('Box', () => {
  describe('BoxConverter', () => {
    describe('fromAttribute()', () => {
      it('ignore falsy values', () => {
        expect(GenericBoxConverter.fromAttribute(undefined)).toEqual(undefined)
        expect(GenericBoxConverter.fromAttribute(null)).toEqual(undefined)
        expect(GenericBoxConverter.fromAttribute('')).toEqual(undefined)
      })

      it('accept single value', () => {
        expect(GenericBoxConverter.fromAttribute('plain')).toEqual('plain')
        expect(GenericBoxConverter.fromAttribute('kebab-case')).toEqual('kebab-case')
        expect(GenericBoxConverter.fromAttribute('camelCase')).toEqual('camelCase')
        expect(GenericBoxConverter.fromAttribute('-Mixed-Case')).toEqual('-Mixed-Case')
        expect(GenericBoxConverter.fromAttribute('_snake_case')).toEqual('_snake_case')
        expect(GenericBoxConverter.fromAttribute('dot.case')).toEqual('dot.case')
        expect(GenericBoxConverter.fromAttribute('123')).toEqual('123')
      })

      it('accept values as list', () => {
        expect(GenericBoxConverter.fromAttribute('value1 value2')).toEqual(['value1', 'value2'])
        expect(GenericBoxConverter.fromAttribute('kebab-case -Mixed-Case _snake_case 123')).toEqual(['kebab-case', '-Mixed-Case', '_snake_case', '123'])
      })

      it('accept specific properties', () => {
        expect(GenericBoxConverter.fromAttribute('top:value')).toEqual({ 'top': 'value' })
        expect(GenericBoxConverter.fromAttribute('left:value')).toEqual({ 'left': 'value' })
        expect(GenericBoxConverter.fromAttribute('right:value')).toEqual({ 'right': 'value' })
        expect(GenericBoxConverter.fromAttribute('bottom:value')).toEqual({ 'bottom': 'value' })
      })

      it('accept properties with any values', () => {
        expect(GenericBoxConverter.fromAttribute('top:plain')).toEqual({ 'top': 'plain' })
        expect(GenericBoxConverter.fromAttribute('top:kebab-case')).toEqual({ 'top': 'kebab-case' })
        expect(GenericBoxConverter.fromAttribute('top:camelCase')).toEqual({ 'top': 'camelCase' })
        expect(GenericBoxConverter.fromAttribute('top:-Mixed-Case')).toEqual({ 'top': '-Mixed-Case' })
        expect(GenericBoxConverter.fromAttribute('top:_snake_case')).toEqual({ 'top': '_snake_case' })
        expect(GenericBoxConverter.fromAttribute('top:dot.case')).toEqual({ 'top': 'dot.case' })
        expect(GenericBoxConverter.fromAttribute('top:with spaces')).toEqual({ 'top': 'with spaces' })
        expect(GenericBoxConverter.fromAttribute('top:123')).toEqual({ 'top': '123' })
      })
    })

    describe('toAttribute()', () => {
      it('ignore falsy values', () => {
        expect(GenericBoxConverter.toAttribute(undefined)).toEqual(undefined)
        expect(GenericBoxConverter.toAttribute(null)).toEqual(undefined)
        expect(GenericBoxConverter.toAttribute([])).toEqual(undefined)
      })

      it('accept single value', () => {
        expect(GenericBoxConverter.toAttribute('plain')).toEqual('plain')
        expect(GenericBoxConverter.toAttribute('kebab-case')).toEqual('kebab-case')
        expect(GenericBoxConverter.toAttribute('camelCase')).toEqual('camelCase')
        expect(GenericBoxConverter.toAttribute('-Mixed-Case')).toEqual('-Mixed-Case')
        expect(GenericBoxConverter.toAttribute('_snake_case')).toEqual('_snake_case')
        expect(GenericBoxConverter.toAttribute('dot.case')).toEqual('dot.case')
        expect(GenericBoxConverter.toAttribute('123')).toEqual('123')
      })

      it('accept values as list', () => {
        expect(GenericBoxConverter.toAttribute(['value1', 'value2'])).toEqual('value1 value2')
        expect(GenericBoxConverter.toAttribute(['kebab-case', '-Mixed-Case', '_snake_case', '123'])).toEqual('kebab-case -Mixed-Case _snake_case 123')
      })

      it('accept specific properties', () => {
        expect(GenericBoxConverter.toAttribute({ 'top': 'value' })).toEqual('top:value')
        expect(GenericBoxConverter.toAttribute({ 'left': 'value' })).toEqual('left:value')
        expect(GenericBoxConverter.toAttribute({ 'bottom': 'value' })).toEqual('bottom:value')
        expect(GenericBoxConverter.toAttribute({ 'right': 'value' })).toEqual('right:value')
      })

      it('accept properties with string values', () => {
        expect(GenericBoxConverter.toAttribute({ 'top': 'plain' })).toEqual('top:plain')
        expect(GenericBoxConverter.toAttribute({ 'top': 'kebab-case' })).toEqual('top:kebab-case')
        expect(GenericBoxConverter.toAttribute({ 'top': 'camelCase' })).toEqual('top:camelCase')
        expect(GenericBoxConverter.toAttribute({ 'top': '-Mixed-Case' })).toEqual('top:-Mixed-Case')
        expect(GenericBoxConverter.toAttribute({ 'top': '_snake_case' })).toEqual('top:_snake_case')
        expect(GenericBoxConverter.toAttribute({ 'top': 'dot.case' })).toEqual('top:dot.case')
        expect(GenericBoxConverter.toAttribute({ 'top': 'with spaces' })).toEqual('top:with spaces')
        expect(GenericBoxConverter.toAttribute({ 'top': '0' })).toEqual('top:0')
        expect(GenericBoxConverter.toAttribute({ 'top': '123' })).toEqual('top:123')
        expect(GenericBoxConverter.toAttribute({ 'top': '123.45' })).toEqual('top:123.45')
        expect(GenericBoxConverter.toAttribute({ 'top': '1.23e+2' })).toEqual('top:1.23e+2')
      })
    })
  })
})
