import {
  format,
  isValid
} from 'date-fns'

export const createTwilogDateURL = ({
  user,
  date
}: {
  user: string
  date: Date
}): string => {
  if (user === '') {
    return 'https://twilog.togetter.com/'
  }

  if (!isValid(date)) {
    return `https://twilog.togetter.com/${user}/`
  }

  const dateString = format(date, 'yyMMdd')
  return `https://twilog.togetter.com/${user}/date-${dateString}`
}
