import type { Theme } from './types/Theme'

const themes: Theme[] = [
  {
    name: 'ホワイト',
    value: 'white',
    dark: false,
    backgroundColor: '#ffffff',
    color: '#0E1419'
  },
  {
    name: 'ダークブルー',
    value: 'darkblue',
    dark: true,
    backgroundColor: '#15202B',
    color: '#F7F9F9'
  },
  {
    name: 'ブラック',
    value: 'black',
    dark: true,
    backgroundColor: '#000000',
    color: '#E7E9EA'
  }
]

export default defineAppConfig({
  themes
})
