import { makeStyles } from '@material-ui/core'
import { HiChevronLeft } from 'react-icons/hi'
import DefaultButton from './DefaultButton'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  backButton: {
    marginBottom: theme.spacing(1)
  },

  backButtonIcon: {
    marginRight: theme.spacing(1)
  }
}))

export default function BackButton() {
  const router = useRouter()
  const classes = useStyles()

  return (
    <DefaultButton onClick={router.back} size='small' className={classes.backButton}>
      <HiChevronLeft size={20} className={classes.backButtonIcon} />Go Back
    </DefaultButton>
  )
}
