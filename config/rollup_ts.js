import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import merge from 'lodash/merge'
// import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
// import filesize from 'rollup-plugin-filesize'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
// const replace = require('@rollup/plugin-replace')

const tsCompilerOptions = {
  sourceMap: false,
  rootDir: 'src',
  outDir: '',
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

const tscConfig = (custom) => merge(custom, {
  input: 'src/index.ts',
  output: { dir: '.', format: 'esm', preserveModules: true },
  plugins: [
    del({ targets: ['./*.d.ts', './*.js', '!./rollup.config.js'], hook: 'buildStart' }),
    PeerDepsExternalPlugin(),
    nodeResolve(),
    commonjs(),
    typescript(tsCompilerOptions),
    // replace({ 'Reflect.decorate': 'undefined' }),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/
        }
      }
    }),
  ]
})

export default tscConfig
