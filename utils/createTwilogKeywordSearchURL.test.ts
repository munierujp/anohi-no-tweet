import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwilogKeywordSearchURL } from './createTwilogKeywordSearchURL'

describe('createTwilogKeywordSearchURL', () => {
  describe('returns the URL of the Twilog', () => {
    it.each<{
      user: string
      keyword: string
      expected: string
    }>([
      {
        user: '',
        keyword: '',
        expected: 'https://twilog.togetter.com/'
      },
      {
        user: 'munieru_jp',
        keyword: '',
        expected: 'https://twilog.togetter.com/munieru_jp/'
      },
      {
        user: 'munieru_jp',
        keyword: 'hello',
        expected: 'https://twilog.togetter.com/munieru_jp/search?word=hello'
      }
    ])('user=$user, keyword=$keyword', ({
      user,
      keyword,
      expected
    }) => {
      const actual = createTwilogKeywordSearchURL({
        user,
        keyword
      })
      expect(actual).toBe(expected)
    })
  })
})
