import { format } from 'date-fns'

export const createTwisaveDateURL = ({
  user,
  date
}: {
  user: string
  date: Date
}): string => {
  const dateString = format(date, 'yyyy/M/d')
  return `https://twisave.com/${user}/${dateString}`
}
