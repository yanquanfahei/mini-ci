import { defineConfig } from './src/config'

export default defineConfig({
  platform: ['weixin'],
  weixin: {
    project: './playground/dist/build/mp-weixin'
  }
})
