/* eslint-disable quote-props */
import { BoxSizeConverter } from './BoxSize'

describe('BoxSize', () => {
  describe('BoxSizeConverter', () => {
    describe('fromAttribute()', () => {
      it('ignore falsy values', () => {
        expect(BoxSizeConverter.fromAttribute(undefined)).toEqual(undefined)
        expect(BoxSizeConverter.fromAttribute(null)).toEqual(undefined)
        expect(BoxSizeConverter.fromAttribute('')).toEqual(undefined)
      })

      it('accept single string value', () => {
        expect(BoxSizeConverter.fromAttribute('plain')).toEqual('plain')
        expect(BoxSizeConverter.fromAttribute('kebab-case')).toEqual('kebab-case')
        expect(BoxSizeConverter.fromAttribute('camelCase')).toEqual('camelCase')
        expect(BoxSizeConverter.fromAttribute('-Mixed-Case')).toEqual('-Mixed-Case')
        expect(BoxSizeConverter.fromAttribute('_snake_case')).toEqual('_snake_case')
        expect(BoxSizeConverter.fromAttribute('dot.case')).toEqual('dot.case')
      })

      it('accept single numeric value', () => {
        expect(BoxSizeConverter.fromAttribute('0')).toEqual(0)
        expect(BoxSizeConverter.fromAttribute('123')).toEqual(123)
        expect(BoxSizeConverter.fromAttribute('123.45')).toEqual(123.45)
        expect(BoxSizeConverter.fromAttribute('1.23e+2')).toEqual(123)
      })

      it('accept values as list', () => {
        expect(BoxSizeConverter.fromAttribute('value1 value2')).toEqual(['value1', 'value2'])
        expect(BoxSizeConverter.fromAttribute('kebab-case -Mixed-Case 123 1.23e+2')).toEqual(['kebab-case', '-Mixed-Case', 123, 123])
      })

      it('accept specific properties', () => {
        expect(BoxSizeConverter.fromAttribute('top:value')).toEqual({ 'top': 'value' })
        expect(BoxSizeConverter.fromAttribute('left:value')).toEqual({ 'left': 'value' })
        expect(BoxSizeConverter.fromAttribute('right:value')).toEqual({ 'right': 'value' })
        expect(BoxSizeConverter.fromAttribute('bottom:value')).toEqual({ 'bottom': 'value' })
      })

      it('accept properties with string values', () => {
        expect(BoxSizeConverter.fromAttribute('top:plain')).toEqual({ 'top': 'plain' })
        expect(BoxSizeConverter.fromAttribute('top:kebab-case')).toEqual({ 'top': 'kebab-case' })
        expect(BoxSizeConverter.fromAttribute('top:camelCase')).toEqual({ 'top': 'camelCase' })
        expect(BoxSizeConverter.fromAttribute('top:-Mixed-Case')).toEqual({ 'top': '-Mixed-Case' })
        expect(BoxSizeConverter.fromAttribute('top:_snake_case')).toEqual({ 'top': '_snake_case' })
        expect(BoxSizeConverter.fromAttribute('top:dot.case')).toEqual({ 'top': 'dot.case' })
        expect(BoxSizeConverter.fromAttribute('top:with spaces')).toEqual({ 'top': 'with spaces' })
      })

      it('accept properties with numeric values', () => {
        expect(BoxSizeConverter.fromAttribute('top:0')).toEqual({ 'top': 0 })
        expect(BoxSizeConverter.fromAttribute('top:123')).toEqual({ 'top': 123 })
        expect(BoxSizeConverter.fromAttribute('top:123.45')).toEqual({ 'top': 123.45 })
        expect(BoxSizeConverter.fromAttribute('top:1.23e+2')).toEqual({ 'top': 123 })
      })
    })

    describe('toAttribute()', () => {
      it('ignore falsy values', () => {
        expect(BoxSizeConverter.toAttribute(undefined)).toEqual(undefined)
        expect(BoxSizeConverter.toAttribute(null)).toEqual(undefined)
        expect(BoxSizeConverter.toAttribute([])).toEqual(undefined)
      })

      it('accept single string value', () => {
        expect(BoxSizeConverter.toAttribute('plain')).toEqual('plain')
        expect(BoxSizeConverter.toAttribute('kebab-case')).toEqual('kebab-case')
        expect(BoxSizeConverter.toAttribute('camelCase')).toEqual('camelCase')
        expect(BoxSizeConverter.toAttribute('-Mixed-Case')).toEqual('-Mixed-Case')
        expect(BoxSizeConverter.toAttribute('_snake_case')).toEqual('_snake_case')
        expect(BoxSizeConverter.toAttribute('dot.case')).toEqual('dot.case')
      })

      it('accept single numeric value', () => {
        expect(BoxSizeConverter.toAttribute(0)).toEqual('0')
        expect(BoxSizeConverter.toAttribute(123)).toEqual('123')
        expect(BoxSizeConverter.toAttribute(123.45)).toEqual('123.45')
        expect(BoxSizeConverter.toAttribute(1.23e+2)).toEqual('123')
      })

      it('accept values as list', () => {
        expect(BoxSizeConverter.toAttribute(['value1', 'value2'])).toEqual('value1 value2')
        expect(BoxSizeConverter.toAttribute(['kebab-case', '-Mixed-Case', 123, 123.45])).toEqual('kebab-case -Mixed-Case 123 123.45')
      })

      it('accept specific properties', () => {
        expect(BoxSizeConverter.toAttribute({ 'top': 'value' })).toEqual('top:value')
        expect(BoxSizeConverter.toAttribute({ 'left': 'value' })).toEqual('left:value')
        expect(BoxSizeConverter.toAttribute({ 'bottom': 'value' })).toEqual('bottom:value')
        expect(BoxSizeConverter.toAttribute({ 'right': 'value' })).toEqual('right:value')
      })

      it('accept properties with string values', () => {
        expect(BoxSizeConverter.toAttribute({ 'top': 'plain' })).toEqual('top:plain')
        expect(BoxSizeConverter.toAttribute({ 'top': 'kebab-case' })).toEqual('top:kebab-case')
        expect(BoxSizeConverter.toAttribute({ 'top': 'camelCase' })).toEqual('top:camelCase')
        expect(BoxSizeConverter.toAttribute({ 'top': '-Mixed-Case' })).toEqual('top:-Mixed-Case')
        expect(BoxSizeConverter.toAttribute({ 'top': '_snake_case' })).toEqual('top:_snake_case')
        expect(BoxSizeConverter.toAttribute({ 'top': 'dot.case' })).toEqual('top:dot.case')
        expect(BoxSizeConverter.toAttribute({ 'top': 'with spaces' })).toEqual('top:with spaces')
      })

      it('accept properties with numeric values', () => {
        expect(BoxSizeConverter.toAttribute({ 'top': 0 })).toEqual('top:0')
        expect(BoxSizeConverter.toAttribute({ 'top': 123 })).toEqual('top:123')
        expect(BoxSizeConverter.toAttribute({ 'top': 123.45 })).toEqual('top:123.45')
        expect(BoxSizeConverter.toAttribute({ 'top': 1.23e+2 })).toEqual('top:123')
      })
    })
  })
})
