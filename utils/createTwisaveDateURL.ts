import dayjs from 'dayjs'

export const createTwisaveDateURL = ({
  user,
  date
}: {
  user: string
  date: string
}): string => {
  if (date === '') {
    return `https://twisave.com/${user}/`
  }

  const day = dayjs(date)

  if (!day.isValid()) {
    return `https://twisave.com/${user}/`
  }

  const dateString = day.format('YYYY/M/D')
  return `https://twisave.com/${user}/${dateString}`
}
