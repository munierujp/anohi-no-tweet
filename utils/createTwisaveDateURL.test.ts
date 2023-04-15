import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwisaveDateURL } from './createTwisaveDateURL'

describe('createTwisaveDateURL', () => {
  it('returns the URL of Twisave for the given date.', () => {
    const actual = createTwisaveDateURL({
      user: 'munieru_jp',
      date: new Date('2023-04-13')
    })

    expect(actual).toBe('https://twisave.com/munieru_jp/2023/4/13')
  })
})
