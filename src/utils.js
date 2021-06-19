import { format } from "date-fns"

export const formatPostDate = (date) => {
  return format(new Date(date), 'MMMM dd, yyyy')
}
