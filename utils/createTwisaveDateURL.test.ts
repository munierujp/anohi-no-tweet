import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwisaveDateURL } from './createTwisaveDateURL'

describe('createTwisaveDateURL', () => {
  describe('returns the URL of the Twisave', () => {
    it.each([
      { date: new Date(''), expected: 'https://twisave.com/munieru_jp/' },
      { date: new Date('2023-04-13'), expected: 'https://twisave.com/munieru_jp/2023/4/13' }
    ])('date=$date', ({ date, expected }) => {
      const actual = createTwisaveDateURL({
        user: 'munieru_jp',
        date
      })
      expect(actual).toBe(expected)
    })
  })
})
