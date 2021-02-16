/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports,no-undef */
const del = require('rollup-plugin-delete')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
// const postcss = require('rollup-plugin-postcss')
const { terser } = require('rollup-plugin-terser')
const dts = require('rollup-plugin-dts').default
const filesize = require('rollup-plugin-filesize')
const replace = require('@rollup/plugin-replace')

const buildConfig = {
  input: 'src/index.ts',
  output: { dir: 'dist', format: 'cjs' },
  plugins: [
    del({ targets: 'dist', hook: 'buildStart' }),
    peerDepsExternal(),
    nodeResolve(),
    commonjs({
      // requireReturnsDefault: false,
      // esmExternals: false,
      // include: /node_modules/
    }),
    typescript({
      target: 'es5',
      lib: ['es5', 'es6', 'es7', 'dom'],
      declaration: true,
      declarationDir: 'dist/types',
      sourceMap: false,
      rootDir: 'src',
      outDir: 'dist'
    }),
    replace({ 'Reflect.decorate': 'undefined' }),
    // postcss({
    //   extract: false,
    //   modules: true,
    //   use: ['sass']
    // }),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/
        }
      }
    }),
    filesize({
      showBrotliSize: true
    })
  ]
}

const dtsBundlerConfig = {
  input: 'dist/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts' }],
  plugins: [
    dts(),
    del({ targets: 'dist/types', hook: 'buildEnd' })
  ]
}

module.exports = [
  buildConfig,
  dtsBundlerConfig
]
