import pkg from 'minidev'
import type { IIDECommandOptions, IMinidev, IPreviewArgs, IUploadOptions } from 'minidev'

// @ts-ignore
const { minidev } = pkg as { minidev: IMinidev }

export function openAlipayDevtool (openConfig?: IIDECommandOptions) {
  minidev.startIde(openConfig || {})
}

// TODO:支持使用密钥生成授权
export async function alipayPreview (config?: IPreviewArgs) {
  if (!config?.appId) {
    return
  }

  if (!config?.project) {
    return
  }

  await minidev.login({}, (loginTask) => {
    // Node.js API 方式可以通过第二个参数获取 loginTask 以便后续展示等
    loginTask.on('qrcode-generated', (qrcodeUrl) => {
      // 已获取登录图片，进行后续展示
      console.log(qrcodeUrl)
    })

    loginTask.on('polling', (remainingMs) => {
      console.log(`二维码过期时间: ${Math.floor(remainingMs / 1000)}s`)
    })
  })

  minidev.preview(config).catch((error) => {
    console.log(error, 'error')
  })
}

export async function alipayUpload (config?: IUploadOptions) {
  if (!config?.appId) {
    return
  }

  await minidev.login({}, (loginTask) => {
    // Node.js API 方式可以通过第二个参数获取 loginTask 以便后续展示等
    loginTask.on('qrcode-generated', (qrcodeUrl) => {
      // 已获取登录图片，进行后续展示
      console.log(qrcodeUrl)
    })

    loginTask.on('polling', (remainingMs) => {
      console.log(`二维码过期时间: ${Math.floor(remainingMs / 1000)}s`)
    })
  })

  minidev.upload(config).catch((error) => {
    console.log(error, 'error')
  })
}
