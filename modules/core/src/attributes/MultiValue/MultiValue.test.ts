import { MultiValue } from './MultiValue'

const checkParse = (input: any, expected: MultiValue.Type) => {
  const parsed = MultiValue.parse(input)
  expect(parsed).toEqual(expected)
}

const checkStringify = (input: any, expected: string) => {
  const string = MultiValue.stringify(input)
  expect(string).toEqual(expected)
}

describe('MultiValue', () => {
  describe('parse()', () => {
    it('accept falsy values', () => {
      checkParse(undefined, [])
      checkParse(null, [])
      checkParse('', [])
    })

    it('accept single value', () => {
      checkParse('plain', ['plain'])
      checkParse('kebab-case', ['kebab-case'])
      checkParse('camelCase', ['camelCase'])
      checkParse('-Mixed-Case', ['-Mixed-Case'])
      checkParse('_snake_case', ['_snake_case'])
      checkParse('dot.case', ['dot.case'])
      checkParse('123', ['123'])
    })

    it('ignore spaces around value', () => {
      checkParse(' value ', ['value'])
      checkParse(' value   ', ['value'])
    })

    it('accept multiple values', () => {
      checkParse('value1 value2', ['value1', 'value2'])
      checkParse('kebab-case -Mixed-Case _snake_case 123', ['kebab-case', '-Mixed-Case', '_snake_case', '123'])
    })

    it('ignore additional spaces between values', () => {
      checkParse('value1  value2', ['value1', 'value2'])
      checkParse(' value1  value2   ', ['value1', 'value2'])
    })
  })

  describe('stringify()', () => {
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
