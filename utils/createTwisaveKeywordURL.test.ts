import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwisaveKeywordURL } from './createTwisaveKeywordURL'

describe('createTwisaveKeywordURL', () => {
  it('returns URL to search for keywords in Twisave.', () => {
    const actual = createTwisaveKeywordURL({
      user: 'munieru_jp',
      keyword: 'hello'
    })

    expect(actual).toBe('https://twisave.com/munieru_jp/search/hello')
  })
})
