import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwilogDateURL } from './createTwilogDateURL'

describe('createTwilogDateURL', () => {
  describe('returns the URL of the Twilog', () => {
    it.each<{
      user: string
      date: Date
      expected: string
    }>([
      {
        user: '',
        date: new Date(''),
        expected: 'https://twilog.togetter.com/'
      },
      {
        user: 'munieru_jp',
        date: new Date(''),
        expected: 'https://twilog.togetter.com/munieru_jp/'
      },
      {
        user: 'munieru_jp',
        date: new Date('2023-04-13'),
        expected: 'https://twilog.togetter.com/munieru_jp/date-230413'
      }
    ])('user=$user, date=$date', ({
      user,
      date,
      expected
    }) => {
      const actual = createTwilogDateURL({
        user,
        date
      })
      expect(actual).toBe(expected)
    })
  })
})
