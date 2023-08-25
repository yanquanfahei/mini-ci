import path from 'node:path'
import { existsSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { Config, Platform } from './types'
import { DEFAULT_CONFIG_FILES } from './constants'
import { dynamicImport } from './utils'

const rootPath = process.cwd()

export function defineConfig (config: Config) {
  return config
}

interface InlineConfig {
  platform?: string
  configFile?: string
}

export async function resolveConfig (config: InlineConfig): Promise<Config | null> {
  const { configFile } = config

  const loadResult = (await loadConfigFromFile(configFile))

  return mergeConfig(loadResult, config)
}

async function loadConfigFromFile (configFile: string | undefined): Promise<Config | null> {
  let resolvedPath: string | undefined

  if (configFile) {
    resolvedPath = path.resolve(rootPath, configFile)
  } else {
    for (const filename of DEFAULT_CONFIG_FILES) {
      const filePath = path.resolve(rootPath, filename)
      if (!existsSync(filePath)) continue

      resolvedPath = filePath
      break
    }
  }

  if (!resolvedPath || !existsSync(resolvedPath)) {
    return null
  }

  const fileUrl = pathToFileURL(resolvedPath)

  const userConfig = (await dynamicImport(fileUrl.href)).default

  return userConfig
}

function mergeConfig (loadResult: Config | null, config: InlineConfig): Config {
  let result: Config = {}

  if (loadResult) {
    result = { ...loadResult }
  }

  if (config.platform) {
    result.platform = config.platform.split(',') as Platform[]
  }

  return result
}
