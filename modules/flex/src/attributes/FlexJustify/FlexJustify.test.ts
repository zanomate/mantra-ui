import { FlexJustify } from './FlexJustify'

describe('FlexJustify', () => {
  describe('parse()', () => {
    it('ignore falsy values', () => {
      expect(FlexJustify.parse(undefined)).toEqual(undefined)
      expect(FlexJustify.parse('')).toEqual(undefined)
    })

    it('accept FlexJustify.Type values', () => {
      expect(FlexJustify.parse(FlexJustify.Type.START)).toEqual(FlexJustify.Type.START)
      expect(FlexJustify.parse(FlexJustify.Type.END)).toEqual(FlexJustify.Type.END)
      expect(FlexJustify.parse(FlexJustify.Type.CENTER)).toEqual(FlexJustify.Type.CENTER)
      expect(FlexJustify.parse(FlexJustify.Type.SPACE_AROUND)).toEqual(FlexJustify.Type.SPACE_AROUND)
      expect(FlexJustify.parse(FlexJustify.Type.SPACE_BETWEEN)).toEqual(FlexJustify.Type.SPACE_BETWEEN)
      expect(FlexJustify.parse(FlexJustify.Type.SPACE_EVENLY)).toEqual(FlexJustify.Type.SPACE_EVENLY)
    })

    it('ignore any other value', () => {
      expect(FlexJustify.parse('plain')).toEqual(undefined)
      expect(FlexJustify.parse('kebab-case')).toEqual(undefined)
      expect(FlexJustify.parse('camelCase')).toEqual(undefined)
      expect(FlexJustify.parse('-Mixed-Case')).toEqual(undefined)
      expect(FlexJustify.parse('_snake_case')).toEqual(undefined)
      expect(FlexJustify.parse('dot.case')).toEqual(undefined)
      expect(FlexJustify.parse('123')).toEqual(undefined)
    })
  })

  describe('toCss()', () => {
    it('ignore falsy values', () => {
      expect(FlexJustify.toCss(undefined)).toEqual('unset')
    })

    it('accept valid values', () => {
      expect(FlexJustify.toCss(FlexJustify.Type.START)).toEqual('flex-start')
      expect(FlexJustify.toCss(FlexJustify.Type.END)).toEqual('flex-end')
      expect(FlexJustify.toCss(FlexJustify.Type.CENTER)).toEqual('center')
      expect(FlexJustify.toCss(FlexJustify.Type.SPACE_AROUND)).toEqual('space-around')
      expect(FlexJustify.toCss(FlexJustify.Type.SPACE_BETWEEN)).toEqual('space-between')
      expect(FlexJustify.toCss(FlexJustify.Type.SPACE_EVENLY)).toEqual('space-evenly')
    })
  })
})
