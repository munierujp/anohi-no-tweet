import {
  describe,
  expect,
  it
} from 'vitest'
import { createSearchUrl } from './createSearchUrl'

describe('createSearchUrl', () => {
  describe('returns the URL', () => {
    it.each`
      user            | startDate                 | endDate                   | keyword      | includesRetweets | expected
      ${undefined}    | ${undefined}              | ${undefined}              | ${undefined} | ${false}         | ${'https://x.com/search?f=live'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${false}         | ${'https://x.com/search?f=live&q=until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${false}         | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${false}         | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${undefined} | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
    `('user=$user, startDate=$startDate, endDate=$endDate, keyword=$keyword, includesRetweets=$includesRetweets', ({
      user,
      startDate,
      endDate,
      keyword,
      includesRetweets,
      expected
    }) => {
      const actual = createSearchUrl({
        user,
        startDate,
        endDate,
        keyword,
        includesRetweets
      })
      expect(actual).toBe(expected)
    })
  })
})
