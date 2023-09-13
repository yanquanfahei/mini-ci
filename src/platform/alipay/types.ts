import type { IIDECommandOptions, IPreviewArgs } from 'minidev'

export type AlipayConfig = {
  appId: string
  project: string

  /**
   * 启动小程序参数
   */
  open?: IIDECommandOptions

  /**
   * 预览参数
   */
  preview: IPreviewArgs
}
