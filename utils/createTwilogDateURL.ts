import { format } from 'date-fns'

export const createTwilogDateURL = ({
  user,
  date
}: {
  user: string
  date: Date
}): string => {
  const dateString = format(date, 'yyMMdd')
  return `https://twilog.org/${user}/date-${dateString}`
}
