import cac from 'cac'
import { VERSION } from './constants'
import { resolveConfig } from './config'
import { openWeixinDevtool, weixinPreview } from './platform/weixin'

const cli = cac('mini-ci')

let config = null

// common
cli
  .option('-c, --config [file]', '[string] 配置文件名称')
  .option('-p, --platform <platform>', '[weixin,alipay] 执行运行的平台', {
    default: 'weixin'
  })

// open
cli
  .command('open', '打开开发者工具')
  .action(async (option) => {
    config = await resolveConfig(option)
    console.log(config, 'config')
    if (config?.platform) {
      for (const platform of config?.platform) {
        switch (platform) {
          case 'weixin':
            openWeixinDevtool({
              devToolsPath: config?.weixin?.devToolsPath,
              devToolsPort: config?.weixin?.devToolsPort,
              project: config?.weixin?.project
            })
            break
        }
      }
    }
  })

// preview

cli
  .command('preview', '预览')
  .action(async (option) => {
    config = await resolveConfig(option)
    console.log(config, 'config')
    if (config?.platform) {
      for (const platform of config?.platform) {
        switch (platform) {
          case 'weixin':
            weixinPreview(config.weixin!)
            break
        }
      }
    }
  })

cli.help()

cli.version(VERSION)

cli.parse()
