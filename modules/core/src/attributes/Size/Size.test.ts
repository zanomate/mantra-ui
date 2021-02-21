import { SizeConverter, sizeToCss } from './Size'

describe('SizeConverter', () => {
  describe('fromAttribute()', () => {
    it('ignore falsy values', () => {
      expect(SizeConverter.fromAttribute(null)).toEqual(undefined)
      expect(SizeConverter.fromAttribute('')).toEqual(undefined)
    })

    it('accept numeric values', () => {
      expect(SizeConverter.fromAttribute('123')).toEqual(123)
      expect(SizeConverter.fromAttribute('123.45')).toEqual(123.45)
    })

    it('accept string values', () => {
      expect(SizeConverter.fromAttribute('value')).toEqual('value')
      expect(SizeConverter.fromAttribute('100%')).toEqual('100%')
      expect(SizeConverter.fromAttribute('50vh')).toEqual('50vh')
    })
  })

  describe('toAttribute()', () => {
    it('accept falsy values', () => {
      expect(SizeConverter.toAttribute(undefined)).toEqual(undefined)
      expect(SizeConverter.toAttribute('')).toEqual(undefined)
    })

    it('accept numeric values', () => {
      expect(SizeConverter.toAttribute(123)).toEqual('123')
      expect(SizeConverter.toAttribute(123.45)).toEqual('123.45')
    })

    it('accept string values', () => {
      expect(SizeConverter.toAttribute('value')).toEqual('value')
      expect(SizeConverter.toAttribute('100%')).toEqual('100%')
      expect(SizeConverter.toAttribute('50vh')).toEqual('50vh')
    })
  })
})

describe('sizeToCss()', () => {
  it('accept falsy values', () => {
    expect(sizeToCss(undefined)).toEqual('unset')
    expect(sizeToCss('')).toEqual('unset')
  })

  it('accept numeric values', () => {
    expect(sizeToCss(123)).toEqual('123px')
    expect(sizeToCss(123.45)).toEqual('123.45px')
  })

  it('accept string values', () => {
    expect(sizeToCss('value')).toEqual('value')
    expect(sizeToCss('100%')).toEqual('100%')
    expect(sizeToCss('50vh')).toEqual('50vh')
  })
})
