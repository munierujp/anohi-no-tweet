import {
  describe,
  expect,
  it
} from 'vitest'
import { formatISODate } from './formatISODate'

describe('formatISODate', () => {
  describe('returns date string', () => {
    it.each<{
      date: Date
      expected: string
    }>([
      {
        date: new Date('2022-12-31'),
        expected: '2022-12-31'
      },
      {
        date: new Date('2023-01-01'),
        expected: '2023-01-01'
      }
    ])('date=$date', ({
      date,
      expected
    }) => {
      const actual = formatISODate(date)
      expect(actual).toBe(expected)
    })
  })
})
