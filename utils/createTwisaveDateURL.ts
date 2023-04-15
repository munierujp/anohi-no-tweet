import {
  format,
  isValid
} from 'date-fns'

export const createTwisaveDateURL = ({
  user,
  date
}: {
  user: string
  date: Date
}): string => {
  if (user === '') {
    return 'https://twisave.com/'
  }

  if (!isValid(date)) {
    return `https://twisave.com/${user}/`
  }

  const dateString = format(date, 'yyyy/M/d')
  return `https://twisave.com/${user}/${dateString}`
}
