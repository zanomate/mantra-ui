import {
  MultiValueAttribute,
  parseMultiValueAttribute,
  stringifyMultiValueAttribute
} from './MultiValueAttribute'

const checkParse = (input: any, expected: MultiValueAttribute) => {
  const parsed = parseMultiValueAttribute(input)
  expect(parsed).toEqual(expected)
}

const checkStringify = (input: any, expected: string) => {
  const string = stringifyMultiValueAttribute(input)
  expect(string).toEqual(expected)
}

describe('MultiValueAttribute', () => {
  describe('parseMultiValueAttribute()', () => {
    it('accept falsy values', () => {
      checkParse(undefined, [])
      checkParse(null, [])
      checkParse('', [])
    })

    // @ts-ignore
    it('accept single value', () => {
      checkParse('plain', ['plain'])
      checkParse('kebab-case', ['kebab-case'])
      checkParse('camelCase', ['camelCase'])
      checkParse('-Mixed-Case', ['-Mixed-Case'])
      checkParse('_snake_case', ['_snake_case'])
      checkParse('dot.case', ['dot.case'])
      checkParse('123', ['123'])
    })

    // @ts-ignore
    it('ignore spaces around value', () => {
      checkParse(' value ', ['value'])
      checkParse(' value   ', ['value'])
    })

    // @ts-ignore
    it('accept multiple values', () => {
      checkParse('value1 value2', ['value1', 'value2'])
      checkParse('kebab-case -Mixed-Case _snake_case 123', ['kebab-case', '-Mixed-Case', '_snake_case', '123'])
    })

    // @ts-ignore
    it('ignore additional spaces between values', () => {
      checkParse('value1  value2', ['value1', 'value2'])
      checkParse(' value1  value2   ', ['value1', 'value2'])
    })
  })

  describe('stringyMultiValueAttribute()', () => {
    it('accept falsy values', () => {
      checkStringify(undefined, '')
      checkStringify(null, '')
      checkStringify('', '')
    })

    it('accept single value', () => {
      checkStringify(['plain'], 'plain')
      checkStringify(['kebab-case'], 'kebab-case')
      checkStringify(['camelCase'], 'camelCase')
      checkStringify(['-Mixed-Case'], '-Mixed-Case')
      checkStringify(['_snake_case'], '_snake_case')
      checkStringify(['dot.case'], 'dot.case')
      checkStringify(['123'], '123')
    })

    it('ignore spaces around value', () => {
      checkStringify([' value '], 'value')
      checkStringify([' value   '], 'value')
    })

    it('accept multiple values', () => {
      checkStringify(['value1', 'value2'], 'value1 value2')
      checkStringify(['kebab-case', '-Mixed-Case', '_snake_case', '123'], 'kebab-case -Mixed-Case _snake_case 123')
    })

    it('ignore additional spaces between values', () => {
      checkStringify([' value1 ', '  value2   '], 'value1 value2')
    })
  })
})
