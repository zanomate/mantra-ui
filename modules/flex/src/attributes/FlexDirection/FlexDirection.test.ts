import { FlexDirection } from './FlexDirection'

describe('FlexDirection', () => {
  describe('parse()', () => {
    it('ignore falsy values', () => {
      expect(FlexDirection.parse(undefined)).toEqual(undefined)
      expect(FlexDirection.parse('')).toEqual(undefined)
    })

    it('accept specific values', () => {
      expect(FlexDirection.parse(FlexDirection.Type.ROW)).toEqual(FlexDirection.Type.ROW)
      expect(FlexDirection.parse(FlexDirection.Type.COLUMN)).toEqual(FlexDirection.Type.COLUMN)
    })

    it('ignore any other value', () => {
      expect(FlexDirection.parse('plain')).toEqual(undefined)
      expect(FlexDirection.parse('kebab-case')).toEqual(undefined)
      expect(FlexDirection.parse('camelCase')).toEqual(undefined)
      expect(FlexDirection.parse('-Mixed-Case')).toEqual(undefined)
      expect(FlexDirection.parse('_snake_case')).toEqual(undefined)
      expect(FlexDirection.parse('dot.case')).toEqual(undefined)
    })
  })

  describe('toCss()', () => {
    it('ignore falsy values', () => {
      expect(FlexDirection.toCss(undefined)).toEqual('unset')
    })

    it('accept specific values', () => {
      expect(FlexDirection.toCss(FlexDirection.Type.ROW)).toEqual('row')
      expect(FlexDirection.toCss(FlexDirection.Type.COLUMN)).toEqual('column')
    })

    it('accept options', () => {
      expect(FlexDirection.toCss(FlexDirection.Type.ROW, { reverse: true })).toEqual('row-reverse')
      expect(FlexDirection.toCss(FlexDirection.Type.COLUMN, { reverse: true })).toEqual('column-reverse')
      expect(FlexDirection.toCss(undefined, { row: true })).toEqual('row')
      expect(FlexDirection.toCss(undefined, { column: true })).toEqual('column')
    })

    it('gives priority to options', () => {
      expect(FlexDirection.toCss(FlexDirection.Type.ROW, { column: true })).toEqual('column')
      expect(FlexDirection.toCss(FlexDirection.Type.COLUMN, { row: true })).toEqual('row')
    })

    it('column options wins over row one', () => {
      expect(FlexDirection.toCss(undefined, { row: true, column: true })).toEqual('column')
    })
  })
})
