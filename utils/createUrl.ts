import {
  format,
  isValid
} from 'date-fns'

export const createUrl = ({
  user,
  startDate,
  endDate,
  keyword,
  excludeKeyword,
  includesRetweets
}: {
  user: string | undefined
  startDate: Date | undefined
  endDate: Date | undefined
  keyword: string | undefined
  excludeKeyword: string | undefined
  includesRetweets: boolean | undefined
}): string => {
  const queries: string[] = []

  if (keyword) {
    queries.push(keyword)
  }

  if (excludeKeyword) {
    excludeKeyword.split(/\s+/).forEach(word => queries.push(`-${word}`))
  }

  if (user) {
    queries.push(`from:${user}`)
  }

  if (startDate && isValid(startDate)) {
    const startDateString = format(startDate, 'yyyy-MM-dd')
    queries.push(`since:${startDateString}_00:00:00_JST`)
  }

  if (endDate && isValid(endDate)) {
    const endDateString = format(endDate, 'yyyy-MM-dd')
    queries.push(`until:${endDateString}_23:59:59_JST`)
  }

  if (includesRetweets) {
    queries.push('include:nativeretweets')
  }

  const params = new URLSearchParams({
    f: 'live'
  })

  if (queries.length > 0) {
    params.set('q', queries.join(' '))
  }

  return `https://x.com/search?${params.toString()}`
}
