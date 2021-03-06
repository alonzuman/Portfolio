import { Box, makeStyles } from '@material-ui/core'
import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import IconButton from '../style-guide/IconButton'
import useClasses from '../hooks/useClasses'

const useStyles = makeStyles(theme => ({
  link: {
    listStyle: 'none'
  }
}))

export default function SocialIcons() {
  const classes = useClasses({
    link: {
      listStyle: 'none'
    },

    container: {
      padding: 0
    }
  })
  // const classes = useStyles()

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' component='ul' className={classes.container}>
      <Box mx={2} className={classes.link} component='li'>
        <Link href='https://www.linkedin.com/in/alon-zuman-018365193/'>
          <a target='_blank'>
            <IconButton size='medium'>
              <FaLinkedinIn size={32} />
            </IconButton>
          </a>
        </Link>
      </Box>
      <Box mx={2} className={classes.link} component='li'>
        <Link href='https://www.facebook.com/alonzuman'>
          <a target='_blank'>
            <IconButton size='medium'>
              <FaFacebookF size={22} />
            </IconButton>
          </a>
        </Link>
      </Box>
      <Box mx={2} className={classes.link} component='li'>
        <Link href='https://www.github.com/alonzuman'>
          <a target='_blank'>
            <IconButton size='medium'>
              <FaGithub size={32} />
            </IconButton>
          </a>
        </Link>
      </Box>
    </Box>
  )
}
