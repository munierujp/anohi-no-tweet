import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwilogDateURL } from './createTwilogDateURL'

describe('createTwilogDateURL', () => {
  it('returns the URL of Twilog for the given date.', () => {
    const actual = createTwilogDateURL({
      user: 'munieru_jp',
      date: new Date('2023-04-13')
    })

    expect(actual).toBe('https://twilog.org/munieru_jp/date-230413')
  })
})
