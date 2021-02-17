import { FlexAlign } from './FlexAlign'

describe('FlexAlign', () => {
  describe('parse()', () => {
    it('ignore falsy values', () => {
      expect(FlexAlign.parse(undefined)).toEqual(undefined)
      expect(FlexAlign.parse('')).toEqual(undefined)
    })

    it('accept FlexAlign.Type values', () => {
      expect(FlexAlign.parse(FlexAlign.Type.STRETCH)).toEqual(FlexAlign.Type.STRETCH)
      expect(FlexAlign.parse(FlexAlign.Type.START)).toEqual(FlexAlign.Type.START)
      expect(FlexAlign.parse(FlexAlign.Type.END)).toEqual(FlexAlign.Type.END)
      expect(FlexAlign.parse(FlexAlign.Type.CENTER)).toEqual(FlexAlign.Type.CENTER)
      expect(FlexAlign.parse(FlexAlign.Type.BASELINE)).toEqual(FlexAlign.Type.BASELINE)
    })

    it('ignore any other value', () => {
      expect(FlexAlign.parse('plain')).toEqual(undefined)
      expect(FlexAlign.parse('kebab-case')).toEqual(undefined)
      expect(FlexAlign.parse('camelCase')).toEqual(undefined)
      expect(FlexAlign.parse('-Mixed-Case')).toEqual(undefined)
      expect(FlexAlign.parse('_snake_case')).toEqual(undefined)
      expect(FlexAlign.parse('dot.case')).toEqual(undefined)
      expect(FlexAlign.parse('123')).toEqual(undefined)
    })
  })

  describe('toCss()', () => {
    it('ignore falsy values', () => {
      expect(FlexAlign.toCss(undefined)).toEqual('unset')
    })

    it('accept valid values', () => {
      expect(FlexAlign.toCss(FlexAlign.Type.STRETCH)).toEqual('stretch')
      expect(FlexAlign.toCss(FlexAlign.Type.START)).toEqual('flex-start')
      expect(FlexAlign.toCss(FlexAlign.Type.END)).toEqual('flex-end')
      expect(FlexAlign.toCss(FlexAlign.Type.CENTER)).toEqual('center')
      expect(FlexAlign.toCss(FlexAlign.Type.BASELINE)).toEqual('baseline')
    })
  })
})
