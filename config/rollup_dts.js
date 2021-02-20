const del = require('rollup-plugin-delete')
const dts = require('rollup-plugin-dts').default
const merge = require('lodash/merge')

const dtsConfig = (custom) => merge(custom, {
  input: 'dist/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts' }],
  external: ['lit-element', 'lit-html', 'react'],
  plugins: [
    dts({ respectExternal: true }),
    del({ targets: 'dist/types', hook: 'buildEnd' })
  ]
})

export default dtsConfig
