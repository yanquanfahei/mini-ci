import tma from 'tt-ide-cli'
import { OpenConfig } from './types'

export function openToutiaoDevtool (config?: OpenConfig) {
  if (!config || !config.project) {
    return
  }

  tma.open(config)
}
