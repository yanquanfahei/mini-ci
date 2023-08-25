import { WeixinConfig } from './platform/weixin/types'

export type Platform = 'weixin'

export interface Config {
  /**
   * 指定要执行操作的平台
   */
  platform?: Platform[]
  /**
   * 微信相关配置
   */
  weixin?: WeixinConfig
}
