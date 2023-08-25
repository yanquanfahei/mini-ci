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
}
