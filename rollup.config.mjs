import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { isBuiltin } from 'node:module'
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { dts } from 'rollup-plugin-dts'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig([
  {
    input: {
      index: resolve(__dirname, './src/index.ts'),
      cli: resolve(__dirname, './src/cli.ts'),
      constant: resolve(__dirname, './src/constants.ts')
    },
    output: {
      dir: './dist',
      format: 'esm'
    },
    external (id) {
      return isBuiltin(id) || id === 'minidev'
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js'],
        preferBuiltins: false
      }),
      commonjs(),
      typescript({
        exclude: ['node_modules/**']
      }),
      json()

    ]
  },
  {
    input: resolve(__dirname, 'src/index.ts'),
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
    plugins: [dts()]
  }
])
