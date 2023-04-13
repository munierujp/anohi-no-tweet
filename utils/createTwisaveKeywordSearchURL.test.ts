import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwisaveKeywordSearchURL } from './createTwisaveKeywordSearchURL'

describe('createTwisaveKeywordSearchURL', () => {
  it('returns the URL to search for keywords in Twisave.', () => {
    const actual = createTwisaveKeywordSearchURL({
      user: 'munieru_jp',
      keyword: 'hello'
    })

    expect(actual).toBe('https://twisave.com/munieru_jp/search/hello')
  })
})
