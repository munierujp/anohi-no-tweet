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
    return 'https://twilog.org/'
  }

  if (!isValid(date)) {
    return `https://twilog.org/${user}/`
  }

  const dateString = format(date, 'yyMMdd')
  return `https://twilog.org/${user}/date-${dateString}`
}
