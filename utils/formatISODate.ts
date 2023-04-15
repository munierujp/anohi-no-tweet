import { formatISO } from 'date-fns'

export const formatISODate = (date: Date): string => {
  return formatISO(date, { representation: 'date' })
}
