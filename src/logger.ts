import colors from 'picocolors'

const log = console.log

export function logError (message: string) {
  log(colors.red(message))
}

export function logWarning (message: string) {
  log(colors.yellow(message))
}
