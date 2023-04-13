import dayjs from 'dayjs'

export const createTwitterSearchURL = ({
  user,
  date,
  keyword,
  includesRetweets
}: {
  user: string
  date: string
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

  if (date !== '') {
    const day = dayjs(date)

    if (day.isValid()) {
      const dateString = day.format('YYYY-MM-DD')
      queries.push(
        `since:${dateString}_00:00:00_JST`,
        `until:${dateString}_23:59:59_JST`
      )
    }
  }

  if (includesRetweets) {
    queries.push('include:nativeretweets')
  }

  const query = queries.join(' ')
  const params = new URLSearchParams({
    f: 'live',
    q: query
  })
  return `https://twitter.com/search?${params.toString()}`
}
