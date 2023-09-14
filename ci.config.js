// import path from 'node:path'
import { defineConfig } from './dist/index.js'

export default defineConfig({
  platform: ['alipay'],
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
  },
  alipay: {
    appId: '2021003139676331',
    project: './playground/dist/build/mp-alipay',
    open: {
      project: './playground/dist/build/mp-alipay',
      lite: true
    },
    preview: {
      appId: '2021003139676331',
      project: './playground/dist/build/mp-alipay'
    },
    upload: {
      appId: '2021003139676331',
      project: './playground/dist/build/mp-alipay'
    }
  }
})
