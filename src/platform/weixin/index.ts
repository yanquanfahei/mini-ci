import { join, resolve } from 'node:path'
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { isWindows } from '../../utils'
import { logError } from '../../logger'
import { WeixinConfig } from './types'

const rootPath = process.cwd()

const defaultDevtoolsPath = isWindows ? 'C:\\Program Files (x86)\\Tencent\\微信web开发者工具' : '/Applications/wechatwebdevtools.app'

const defaultDevToolsPort = 49200

export function openWeixinDevtool (config: WeixinConfig) {
  const { project, devToolsPath, devToolsPort } = config

  const cliPath = getCliPath(devToolsPath)

  if (!cliPath) return

  const args = ['--port', `${devToolsPort || defaultDevToolsPort}`, 'open']

  if (project) {
    args.push('--project', resolve(rootPath, project))
  }

  execFileSync(cliPath, args, { stdio: 'inherit' })
}

export function weixinPreview (config: WeixinConfig) {
  const { devToolsPath, preview, project } = config
  const cliPath = getCliPath(devToolsPath)

  if (!cliPath) return

  const args = ['preview']

  if (project) {
    args.push('--project', resolve(rootPath, project))
  }

  if (preview) {
    const { qrFormat, qrOutput, qrSize, infoOutput, compileCondition } = preview

    if (qrFormat) {
      args.push('--qr-format', qrFormat)
    }

    if (qrSize) {
      args.push('--qr-size', qrSize)
    } else {
      // 默认改为 small
      args.push('--qr-size', 'small')
    }

    if (qrOutput) {
      args.push('--qr-output', qrOutput)
    }

    if (infoOutput) {
      args.push('--info-output', infoOutput)
    }

    if (compileCondition) {
      args.push('--compile-condition', compileCondition)
    }
  }

  execFileSync(cliPath, args, { stdio: 'inherit' })
}

export function weixinUpload (config: WeixinConfig) {
  const { upload, devToolsPath, project } = config
  const cliPath = getCliPath(devToolsPath)

  if (!cliPath) return

  const args = ['upload']

  if (project) {
    args.push('--project', resolve(rootPath, project))
  }

  if (upload) {
    const { version, desc, infoOutput } = upload
    if (version) {
      args.push('--version', version)
    }

    if (desc) {
      args.push('--desc', desc)
    }

    if (infoOutput) {
      args.push('--info-output', infoOutput)
    }
  }

  execFileSync(cliPath, args, { stdio: 'inherit' })
}

function getCliPath (devToolsPath: string | undefined) {
  const cliPath = join(devToolsPath || defaultDevtoolsPath, isWindows ? '/cli.bat' : '/Contents/MacOS/cli')
  if (!existsSync(cliPath)) {
    logError('微信开发者工具的安装目录不存在，请检查路径并通过 devToolsPath 设置')
    return null
  }
  return cliPath
}
