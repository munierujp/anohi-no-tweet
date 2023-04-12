import dayjs from 'dayjs'

export const createTwilogDateURL = ({
  user,
  date
}: {
  user: string
  date: string
}): string => {
  if (date === '') {
    return `https://twilog.org/${user}/`
  }

  const day = dayjs(date)

  if (!day.isValid()) {
    return `https://twilog.org/${user}/`
  }

  const dateString = day.format('YYMMDD')
  return `https://twilog.org/${user}/date-${dateString}`
}
