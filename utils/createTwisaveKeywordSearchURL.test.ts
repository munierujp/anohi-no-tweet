import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwisaveKeywordSearchURL } from './createTwisaveKeywordSearchURL'

describe('createTwisaveKeywordSearchURL', () => {
  describe('returns the URL of the Twisave', () => {
    it.each<{
      user: string
      keyword: string
      expected: string
    }>([
      {
        user: '',
        keyword: '',
        expected: 'https://twisave.com/'
      },
      {
        user: 'munieru_jp',
        keyword: '',
        expected: 'https://twisave.com/munieru_jp/'
      },
      {
        user: 'munieru_jp',
        keyword: 'hello',
        expected: 'https://twisave.com/munieru_jp/search/hello'
      }
    ])('user=$user, keyword=$keyword', ({
      user,
      keyword,
      expected
    }) => {
      const actual = createTwisaveKeywordSearchURL({
        user,
        keyword
      })
      expect(actual).toBe(expected)
    })
  })
})
