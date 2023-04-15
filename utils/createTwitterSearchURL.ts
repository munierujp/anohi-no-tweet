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
  user: string
  date: Date
  keyword: string
  includesRetweets: boolean
}): string => {
  const queries: string[] = []

  if (keyword !== '') {
    queries.push(keyword)
  }

  if (user !== '') {
    queries.push(`from:${user}`)
  }

  if (isValid(date)) {
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

  return `https://twitter.com/search?${params.toString()}`
}
