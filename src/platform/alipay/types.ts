import type { IIDECommandOptions } from 'minidev'

export type AlipayConfig = {
  appId: string
  project: string

  /**
   * 启动小程序参数
   */
  open?: IIDECommandOptions
}
