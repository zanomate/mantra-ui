import { toCss } from './toCSS'

describe('toCSS()', () => {
  const check = (input: any, expected: string) => {
    const css = toCss(input)
    expect(css).toEqual(expected)
  }

  it('accept falsy values', () => {
    check(undefined, 'unset')
    check(null, 'unset')
    check('', 'unset')
  })

  it('accept boolean values', () => {
    check(true, 'true')
    check(false, 'false')
  })

  it('accept numeric values', () => {
    check(123, '123')
    check(123.45, '123.45')
  })

  it('accept string values', () => {
    check('plain', 'plain')
    check('kebab-case', 'kebab-case')
    check('camelCase', 'camelCase')
    check('-Mixed-Case', '-Mixed-Case')
    check('_snake_case', '_snake_case')
    check('dot.case', 'dot.case')
    check('123', '123')
  })

  it('ignore spaces around string', () => {
    check(' value ', 'value')
    check('  value   ', 'value')
  })
})
