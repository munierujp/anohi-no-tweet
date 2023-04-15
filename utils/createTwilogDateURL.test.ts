import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwilogDateURL } from './createTwilogDateURL'

describe('createTwilogDateURL', () => {
  describe('returns the URL of the Twilog', () => {
    it.each([
      { date: new Date(''), expected: 'https://twilog.org/munieru_jp/' },
      { date: new Date('2023-04-13'), expected: 'https://twilog.org/munieru_jp/date-230413' }
    ])('date=$date', ({ date, expected }) => {
      const actual = createTwilogDateURL({
        user: 'munieru_jp',
        date
      })
      expect(actual).toBe(expected)
    })
  })
})
