import {
  description,
  version
} from './package.json'
import type { Theme } from './types/Theme'

const themes: Theme[] = [
  {
    name: 'ホワイト',
    value: 'white',
    dark: false,
    style: {
      backgroundColor: '#ffffff',
      color: '#0E1419'
    }
  },
  {
    name: 'ダークブルー',
    value: 'darkblue',
    dark: true,
    style: {
      backgroundColor: '#15202B',
      color: '#F7F9F9'
    }
  },
  {
    name: 'ブラック',
    value: 'black',
    dark: true,
    style: {
      backgroundColor: '#000000',
      color: '#E7E9EA'
    }
  }
]

const config = {
  description,
  name: '#あの日のツイートを表示するやつ',
  themes,
  version
} as const

type Config = typeof config

declare module '@nuxt/schema' {
  interface AppConfigInput extends Config {}
}

export default defineAppConfig(config)
