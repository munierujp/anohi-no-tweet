import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwitterSearchURL } from './createTwitterSearchURL'

describe('createTwitterSearchURL', () => {
  describe('returns the URL of the Twitter', () => {
    /* eslint-disable sonarjs/no-duplicate-string */
    it.each<{
      user: string
      date: Date
      keyword: string
      includesRetweets: boolean
      expected: string
    }>([
      {
        user: '',
        date: new Date(''),
        keyword: '',
        includesRetweets: false,
        expected: 'https://twitter.com/search?f=live'
      },
      {
        user: 'munieru_jp',
        date: new Date(''),
        keyword: '',
        includesRetweets: false,
        expected: 'https://twitter.com/search?f=live&q=from%3Amunieru_jp'
      },
      {
        user: 'munieru_jp',
        date: new Date('2023-04-15'),
        keyword: '',
        includesRetweets: false,
        expected: 'https://twitter.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-15_23%3A59%3A59_JST'
      },
      {
        user: 'munieru_jp',
        date: new Date('2023-04-15'),
        keyword: 'hello',
        includesRetweets: false,
        expected: 'https://twitter.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-15_23%3A59%3A59_JST'
      },
      {
        user: 'munieru_jp',
        date: new Date('2023-04-15'),
        keyword: 'hello',
        includesRetweets: true,
        expected: 'https://twitter.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-15_23%3A59%3A59_JST+include%3Anativeretweets'
      }
    ])('user=$user, date=$date, keyword=$keyword, includesRetweets=$includesRetweets', ({
      user,
      date,
      keyword,
      includesRetweets,
      expected
    }) => {
      const actual = createTwitterSearchURL({
        user,
        date,
        keyword,
        includesRetweets
      })
      expect(actual).toBe(expected)
    })
    /* eslint-enable sonarjs/no-duplicate-string */
  })
})
