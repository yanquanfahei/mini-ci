type PreviewConfig = {
  /**
   * 二维码格式
   */
  qrFormat?: 'terminal' | 'image' | 'base64',
  /**
   * 二维码大小，仅在 qr-format=terminal 时生效
   */
  qrSize?: 'small' | 'default'
  /**
   * 二维码会被输出到给定路径
   */
  qrOutput: string
  /**
   * 相关信息会被输出到给定路径
   */
  infoOutput: string
  /**
   * 指定自定义编译条件
   * '{"pathName":"pages/index/index","query":"x=1&y=2"}'
   */
  compileCondition: string
}

export type WeixinConfig = {
  /**
   * 项目地址，从当前运行目录拼接
   */
  project?: string

  /**
   * 微信开发者工具安装的目录，默认是微信开发者工具的默认安装目录
   */
  devToolsPath?: string
  /**
   * 开发者工具的服务端口号，不开启服务端口无法使用命令行
   * 开发者工具的设置 -> 安全设置中开启服务端口
   * @default 49200
   */
  devToolsPort?: number

  /**
   * 预览相关配置
   */
  preview?: PreviewConfig
}
