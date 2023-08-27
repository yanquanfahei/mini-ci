import path from 'node:path'
import { defineConfig } from './src/config'

export default defineConfig({
  platform: ['weixin'],
  weixin: {
    appId: 'wx3a602dc84f1c66c1',
    project: './playground/dist/build/mp-weixin',
    preview: {
      qrSize: 'small'
      // qrFormat: '',
      // qrOutput: path.resolve(process.cwd(), 'code.txt')
      // infoOutput: path.resolve(process.cwd(), 'info.json')
      // compileCondition: '{"pathName":"pages/index/index","query":"x=1&y=2"}'
    },
    upload: {
      version: '1.0.0',
      desc: '测试'
    }
  }
})
