import {
  format,
  isValid
} from 'date-fns'

export const createTwitterSearchURL = ({
  user,
  date,
  keyword,
  includesRetweets
}: {
  user: string | undefined
  date: Date | undefined
  keyword: string | undefined
  includesRetweets: boolean | undefined
}): string => {
  const queries: string[] = []

  if (keyword) {
    queries.push(keyword)
  }

  if (user) {
    queries.push(`from:${user}`)
  }

  if (date && isValid(date)) {
    const dateString = format(date, 'yyyy-MM-dd')
    queries.push(
      `since:${dateString}_00:00:00_JST`,
      `until:${dateString}_23:59:59_JST`
    )
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
