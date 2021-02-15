module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    env: {
      'jest/globals': true
    }
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.jsx', '.json']
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  globals: {
    document: true,
    window: true
  },
  extends: [
    './rules/base/best-practises.js',
    './rules/base/es6.js',
    './rules/base/possible-errors.js',
    './rules/base/strict.js',
    './rules/base/stylistic-issues.js',
    './rules/base/variables.js',
    './rules/plugins/import',
    './rules/plugins/jest',
    './rules/plugins/jsdoc',
    './rules/plugins/node',
    './rules/plugins/react'
  ]
}
