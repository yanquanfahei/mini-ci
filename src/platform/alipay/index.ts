import pkg from 'minidev'
import type { IIDECommandOptions } from 'minidev'

// @ts-ignore
const { minidev } = pkg

export function openAlipayDevtool (openConfig?: IIDECommandOptions) {
  minidev.startIde(openConfig || {})
}
