import type { Theme } from './types/Theme'

const themes: Theme[] = [
  {
    name: 'ホワイト',
    value: 'white',
    dark: false
  },
  {
    name: 'ダークブルー',
    value: 'darkblue',
    dark: true
  },
  {
    name: 'ブラック',
    value: 'black',
    dark: true
  }
]

export default defineAppConfig({
  themes
})
