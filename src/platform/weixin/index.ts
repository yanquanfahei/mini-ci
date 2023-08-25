import { join, resolve } from 'node:path'
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { isWindows } from '../../utils'
import { logError } from '../../logger'

const rootPath = process.cwd()

const defaultDevtoolsPath = isWindows ? 'C:\\Program Files (x86)\\Tencent\\微信web开发者工具' : '/Applications/wechatwebdevtools.app'

const defaultDevToolsPort = 49200

interface IOpenWeixinConfig {
  devToolsPath?: string
  devToolsPort?: number
  project?: string
}

export function openWeixinDevtool (config: IOpenWeixinConfig) {
  const { project, devToolsPath, devToolsPort } = config

  const cliPath = join(devToolsPath || defaultDevtoolsPath, isWindows ? '/cli.bat' : '/Contents/MacOS/cli')

  if (!existsSync(cliPath)) {
    logError('微信开发者工具的安装目录不存在，请检查路径并通过 devToolsPath 设置')
    return
  }

  const args = ['--port', `${devToolsPort || defaultDevToolsPort}`, 'open']

  if (project) {
    args.push('--project', resolve(rootPath, project))
  }

  execFileSync(cliPath, args, { stdio: 'inherit' })
}
