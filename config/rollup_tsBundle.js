/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports,no-undef */
const del = require('rollup-plugin-delete')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const merge = require('lodash/merge')
const typescript = require('@rollup/plugin-typescript')
const { terser } = require('rollup-plugin-terser')
const filesize = require('rollup-plugin-filesize')
const replace = require('@rollup/plugin-replace')

const tsCompilerOptions = {
  declarationDir: 'dist/types',
  sourceMap: false,
  rootDir: 'src',
  outDir: 'dist',
  target: 'es2017',
  module: 'es2015',
  lib: [
    'es2017',
    'dom',
    'dom.iterable'
  ],
  declaration: true,
  declarationMap: true,
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noImplicitReturns: true,
  noFallthroughCasesInSwitch: true,
  moduleResolution: 'node',
  allowSyntheticDefaultImports: true,
  experimentalDecorators: true,
  forceConsistentCasingInFileNames: true,
  plugins: [
    {
      name: 'ts-lit-plugin',
      strict: true
    }
  ]
}

const tsBundleConfig = (custom) => merge(custom, {
  input: 'src/index.ts',
  output: { dir: 'dist', format: 'esm' },
  plugins: [
    del({ targets: 'dist', hook: 'buildStart' }),
    peerDepsExternal(),
    nodeResolve(),
    commonjs({
      // requireReturnsDefault: false,
      // esmExternals: false,
      // include: /node_modules/
    }),
    typescript(tsCompilerOptions),
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
})

export default tsBundleConfig
