import { format } from "date-fns"

export const formatPostDate = (date) => {
  return format(new Date(date), 'MMMM dd, yyyy')
}

export const truncateText = (input, max) => {
  if (input?.length > max) {
    return input?.substring(0, max) + '...';
  }
  return input;
};

export const isEven = (num) => num % 2 === 0;
