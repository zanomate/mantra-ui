/* global module */

module.exports = {
  plugins: [
    'jest'
  ],
  extends: [
    'plugin:jest/recommended'
  ],
  rules: {
    // Have control over test and it usages
    'jest/consistent-test-it': ['warn', {
      fn: 'it',
      withinDescribe: 'it'
    }],
    // Enforce assertion to be made in a test body
    'jest/expect-expect': 'off'
  }
}
