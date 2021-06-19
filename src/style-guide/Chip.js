import { Chip as MChip, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: `${theme.palette.primary.light}99`,
    color: theme.palette.text.primary
  }
}))

export default function Chip({ className, ...rest }) {
  const classes = useStyles()

  return <MChip className={clsx(classes.root, className)} {...rest} />
}
