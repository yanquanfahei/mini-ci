import path from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true
  },
  failOnWarn: false
})
