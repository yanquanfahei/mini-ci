import { platform } from 'node:process'

export const isWindows = platform === 'win32'

// export const dynamicImport = new Function('file', 'return import(file)')
export const dynamicImport = (file: string) => import(file)
