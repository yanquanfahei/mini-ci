import { WeixinConfig } from './platform/weixin/types'
import { AlipayConfig } from './platform/alipay/types'
import { ToutiaoConfig } from './platform/toutiao/types'

export type Platform = 'weixin' | 'alipay' | 'toutiao'

export interface Config {
  /**
   * 指定要执行操作的平台
   */
  platform?: Platform[]
  /**
   * 微信相关配置
   */
  weixin?: WeixinConfig

  /**
   * 支付宝相关配置
   */
  alipay?: AlipayConfig

  /**
   * 头条相关配置
   */
  toutiao?: ToutiaoConfig
}
