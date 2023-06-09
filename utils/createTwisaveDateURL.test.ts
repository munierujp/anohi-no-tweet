import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwisaveDateURL } from './createTwisaveDateURL'

describe('createTwisaveDateURL', () => {
  describe('returns the URL of the Twisave', () => {
    it.each <{
      user: string
      date: Date
      expected: string
    }>([
      {
        user: '',
        date: new Date(''),
        expected: 'https://twisave.com/'
      },
      {
        user: 'munieru_jp',
        date: new Date(''),
        expected: 'https://twisave.com/munieru_jp/'
      },
      {
        user: 'munieru_jp',
        date: new Date('2023-04-13'),
        expected: 'https://twisave.com/munieru_jp/2023/4/13'
      }
    ])('user=$user, date=$date', ({
      user,
      date,
      expected
    }) => {
      const actual = createTwisaveDateURL({
        user,
        date
      })
      expect(actual).toBe(expected)
    })
  })
})
