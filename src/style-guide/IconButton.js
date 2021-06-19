import { IconButton as MIconButton, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  small: {
    height: theme.spacing(5),
    width: theme.spacing(5),
  },

  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  }
}))

export default function IconButton({ size = 'small', className, ...rest }) {
  const classes = useStyles()

  return (
    <MIconButton disableRipple className={clsx(classes?.[size], className)} {...rest} />
  )
}
