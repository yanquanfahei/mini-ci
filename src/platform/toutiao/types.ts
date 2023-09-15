import { ProjectInfo } from 'tt-ide-cli/dist/types'

export type OpenConfig = {
  project: ProjectInfo,
  remotePort?: number
}

export type ToutiaoConfig = {
  open?: OpenConfig
}
