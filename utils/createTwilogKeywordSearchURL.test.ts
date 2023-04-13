import {
  describe,
  expect,
  it
} from 'vitest'
import { createTwilogKeywordSearchURL } from './createTwilogKeywordSearchURL'

describe('createTwilogKeywordSearchURL', () => {
  it('returns the URL to search for keywords in Twilog.', () => {
    const actual = createTwilogKeywordSearchURL({
      user: 'munieru_jp',
      keyword: 'hello'
    })

    expect(actual).toBe('https://twilog.org/munieru_jp/search?word=hello')
  })
})
