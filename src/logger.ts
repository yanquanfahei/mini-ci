import chalk from 'chalk'

const log = console.log

export function logError (message: string) {
  log(chalk.red(message))
}

export function logWarning (message: string) {
  log(chalk.yellow(message))
}
