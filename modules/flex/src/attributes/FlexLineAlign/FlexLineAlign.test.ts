import { FlexLineAlign } from './FlexLineAlign'

describe('FlexLineAlign', () => {
  describe('parse()', () => {
    it('ignore falsy values', () => {
      expect(FlexLineAlign.parse(undefined)).toEqual(undefined)
      expect(FlexLineAlign.parse('')).toEqual(undefined)
    })

    it('accept specific values', () => {
      expect(FlexLineAlign.parse(FlexLineAlign.Type.STRETCH)).toEqual(FlexLineAlign.Type.STRETCH)
      expect(FlexLineAlign.parse(FlexLineAlign.Type.START)).toEqual(FlexLineAlign.Type.START)
      expect(FlexLineAlign.parse(FlexLineAlign.Type.END)).toEqual(FlexLineAlign.Type.END)
      expect(FlexLineAlign.parse(FlexLineAlign.Type.CENTER)).toEqual(FlexLineAlign.Type.CENTER)
      expect(FlexLineAlign.parse(FlexLineAlign.Type.SPACE_AROUND)).toEqual(FlexLineAlign.Type.SPACE_AROUND)
      expect(FlexLineAlign.parse(FlexLineAlign.Type.SPACE_BETWEEN)).toEqual(FlexLineAlign.Type.SPACE_BETWEEN)
      expect(FlexLineAlign.parse(FlexLineAlign.Type.SPACE_EVENLY)).toEqual(FlexLineAlign.Type.SPACE_EVENLY)
    })

    it('ignore any other value', () => {
      expect(FlexLineAlign.parse('plain')).toEqual(undefined)
      expect(FlexLineAlign.parse('kebab-case')).toEqual(undefined)
      expect(FlexLineAlign.parse('camelCase')).toEqual(undefined)
      expect(FlexLineAlign.parse('-Mixed-Case')).toEqual(undefined)
      expect(FlexLineAlign.parse('_snake_case')).toEqual(undefined)
      expect(FlexLineAlign.parse('dot.case')).toEqual(undefined)
      expect(FlexLineAlign.parse('123')).toEqual(undefined)
    })
  })

  describe('toCss()', () => {
    it('ignore falsy values', () => {
      expect(FlexLineAlign.toCss(undefined)).toEqual('unset')
    })

    it('accept specific values', () => {
      expect(FlexLineAlign.toCss(FlexLineAlign.Type.STRETCH)).toEqual('stretch')
      expect(FlexLineAlign.toCss(FlexLineAlign.Type.START)).toEqual('flex-start')
      expect(FlexLineAlign.toCss(FlexLineAlign.Type.END)).toEqual('flex-end')
      expect(FlexLineAlign.toCss(FlexLineAlign.Type.CENTER)).toEqual('center')
      expect(FlexLineAlign.toCss(FlexLineAlign.Type.SPACE_AROUND)).toEqual('space-around')
      expect(FlexLineAlign.toCss(FlexLineAlign.Type.SPACE_BETWEEN)).toEqual('space-between')
      expect(FlexLineAlign.toCss(FlexLineAlign.Type.SPACE_EVENLY)).toEqual('space-evenly')
    })
  })
})
