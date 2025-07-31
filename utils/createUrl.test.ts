import {
  describe,
  expect,
  it
} from 'vitest'
import { createUrl } from './createUrl'

describe('createUrl', () => {
  describe('returns the URL', () => {
    it.each`
      user            | startDate                 | endDate                   | keyword      | excludeKeyword | includesRetweets | expected
      ${undefined}    | ${undefined}              | ${undefined}              | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar'}
      ${undefined}    | ${undefined}              | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${undefined}    | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp'}
      ${'munieru_jp'} | ${undefined}              | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${undefined}              | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${undefined}              | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${undefined} | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${false}         | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${undefined}   | ${true}          | ${'https://x.com/search?f=live&q=hello+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${false}         | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST'}
      ${'munieru_jp'} | ${new Date('2023-04-15')} | ${new Date('2023-04-16')} | ${'hello'}   | ${'foo bar'}   | ${true}          | ${'https://x.com/search?f=live&q=hello+-foo+-bar+from%3Amunieru_jp+since%3A2023-04-15_00%3A00%3A00_JST+until%3A2023-04-16_23%3A59%3A59_JST+include%3Anativeretweets'}
    `('user=$user, startDate=$startDate, endDate=$endDate, keyword=$keyword, excludeKeyword=$excludeKeyword, includesRetweets=$includesRetweets', ({
      user,
      startDate,
      endDate,
      keyword,
      excludeKeyword,
      includesRetweets,
      expected
    }) => {
      const actual = createUrl({
      user,
      startDate,
      endDate,
      keyword,
      excludeKeyword,
      includesRetweets
      })
      expect(actual).toBe(expected)
    })
  })
})
