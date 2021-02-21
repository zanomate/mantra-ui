/* eslint-disable quote-props */
import { BoxSizeConverter } from './BoxSize'

describe('BoxSizeConverter', () => {
  describe('fromAttribute()', () => {
    it('ignore falsy values', () => {
      expect(BoxSizeConverter.fromAttribute(null)).toEqual(undefined)
      expect(BoxSizeConverter.fromAttribute('')).toEqual(undefined)
    })

    describe('accept values as list', () => {
      it('accept numeric values', () => {
        expect(BoxSizeConverter.fromAttribute('123'))
          .toEqual({ top: 123, left: 123, right: 123, bottom: 123 })
        expect(BoxSizeConverter.fromAttribute('123.45'))
          .toEqual({ top: 123.45, left: 123.45, right: 123.45, bottom: 123.45 })
      })

      it('accept string values', () => {
        expect(BoxSizeConverter.fromAttribute('value'))
          .toEqual({ top: 'value', left: 'value', right: 'value', bottom: 'value' })
        expect(BoxSizeConverter.fromAttribute('100%'))
          .toEqual({ top: '100%', left: '100%', right: '100%', bottom: '100%' })
        expect(BoxSizeConverter.fromAttribute('50vh'))
          .toEqual({ top: '50vh', left: '50vh', right: '50vh', bottom: '50vh' })
      })

      it('accept multiple values', () => {
        expect(BoxSizeConverter.fromAttribute('100% 123'))
          .toEqual({ top: '100%', left: 123, right: 123, bottom: '100%' })
        expect(BoxSizeConverter.fromAttribute('100% 123 50vh'))
          .toEqual({ top: '100%', left: 123, right: 123, bottom: '50vh' })
        expect(BoxSizeConverter.fromAttribute('100% 123 50vh 123.45'))
          .toEqual({ top: '100%', left: 123.45, right: 123, bottom: '50vh' })
      })
    })
    describe('accept values as map', () => {
      it('ignore invalid properties', () => {
        expect(BoxSizeConverter.fromAttribute('property:value')).toEqual(undefined)
      })

      it('ignore properties without values', () => {
        expect(BoxSizeConverter.fromAttribute('top:')).toEqual(undefined)
      })

      it('accept valid properties', () => {
        expect(BoxSizeConverter.fromAttribute('top:123')).toEqual({ 'top': 123 })
        expect(BoxSizeConverter.fromAttribute('left:123')).toEqual({ 'left': 123 })
        expect(BoxSizeConverter.fromAttribute('right:123')).toEqual({ 'right': 123 })
        expect(BoxSizeConverter.fromAttribute('bottom:123')).toEqual({ 'bottom': 123 })
      })

      it('ignore spaces around property name', () => {
        expect(BoxSizeConverter.fromAttribute(' top :123')).toEqual({ 'top': 123 })
        expect(BoxSizeConverter.fromAttribute('  top   :123')).toEqual({ 'top': 123 })
      })

      it('accept properties with any string value', () => {
        expect(BoxSizeConverter.fromAttribute('top:plain')).toEqual({ 'top': 'plain' })
        expect(BoxSizeConverter.fromAttribute('top:kebab-case')).toEqual({ 'top': 'kebab-case' })
        expect(BoxSizeConverter.fromAttribute('top:camelCase')).toEqual({ 'top': 'camelCase' })
        expect(BoxSizeConverter.fromAttribute('top:-Mixed-Case')).toEqual({ 'top': '-Mixed-Case' })
        expect(BoxSizeConverter.fromAttribute('top:_snake_case')).toEqual({ 'top': '_snake_case' })
        expect(BoxSizeConverter.fromAttribute('top:dot.case')).toEqual({ 'top': 'dot.case' })
        expect(BoxSizeConverter.fromAttribute('top:with spaces')).toEqual({ 'top': 'with spaces' })
      })

      it('accept properties with any numeric value', () => {
        expect(BoxSizeConverter.fromAttribute('top:123')).toEqual({ 'top': 123 })
        expect(BoxSizeConverter.fromAttribute('top:123.45')).toEqual({ 'top': 123.45 })
      })

      it('ignore spaces around value', () => {
        expect(BoxSizeConverter.fromAttribute('top: value ')).toEqual({ 'top': 'value' })
        expect(BoxSizeConverter.fromAttribute('top:  value   ')).toEqual({ 'top': 'value' })
      })

      it('accept multiple properties', () => {
        expect(BoxSizeConverter.fromAttribute('top: 100%; left: 123')).toEqual({ 'top': '100%', 'left': 123 })
      })

      it('ignore invalid properties between valid ones', () => {
        expect(BoxSizeConverter.fromAttribute('top: 100%; ; left: 123')).toEqual({ 'top': '100%', 'left': 123 })
        expect(BoxSizeConverter.fromAttribute('top: 100%; :; left: 123')).toEqual({ 'top': '100%', 'left': 123 })
        expect(BoxSizeConverter.fromAttribute('top: 100%;: ; left: 123')).toEqual({ 'top': '100%', 'left': 123 })
        expect(BoxSizeConverter.fromAttribute('top: 100%;: value ; left: 123')).toEqual({ 'top': '100%', 'left': 123 })
      })
    })
  })

  describe('toAttribute()', () => {
    // it('accept falsy values', () => {
    //   expect(BoxSizeConverter.toAttribute(undefined)).toEqual('unset')
    //   expect(BoxSizeConverter.toAttribute([])).toEqual('unset')
    // })
    //
    // it('accept numeric values', () => {
    //   expect(BoxSizeConverter.toAttribute([123])).toEqual('123px')
    //   expect(BoxSizeConverter.toAttribute([123.45])).toEqual('123.45px')
    // })
    //
    // it('accept string values', () => {
    //   expect(BoxSizeConverter.toAttribute(['value'])).toEqual('value')
    //   expect(BoxSizeConverter.toAttribute(['100%'])).toEqual('100%')
    //   expect(BoxSizeConverter.toAttribute(['50vh'])).toEqual('50vh')
    // })
    //
    // it('accept multiple values', () => {
    //   expect(BoxSizeConverter.toAttribute(['100%', 123, '50vh', 123.45])).toEqual('100% 123px 50vh 123.45px')
    // })
  })
})
