import { Box, makeStyles, useTheme } from "@material-ui/core";
import Link from 'next/link'
import useDarkMode from "use-dark-mode";
import Constants from "../constants";
import useScrollPosition from "../hooks/useScrollPosition";
import DefaultButton from '../style-guide/DefaultButton'
import IconButton from '../style-guide/IconButton'
import { HiSun, HiMoon } from 'react-icons/hi'

const useStyles = makeStyles(theme => ({
  container: {
    background: `${theme.palette.background.default}50`,
    backdropFilter: 'blur(4.0px)',
    '-webkit-backdrop-filter': 'blur(4.0px)',
    borderBottom: theme.palette.background.paper,
    zIndex: theme.zIndex.appBar,
    transition: 'box-shadow .15s ease-in-out, background-color .25s ease-in-out'
  }
}))

export default function Header() {
  const classes = useStyles()
  const { shadows, breakpoints } = useTheme()
  const { scrollY } = useScrollPosition()
  const { value, toggle } = useDarkMode(true)

  return (
    <Box
      display='flex'
      justifyContent='center'
      component='nav'
      position='sticky'
      top={0}
      className={classes.container}
      boxShadow={scrollY === 0 ? 'none' : shadows[2]}
    >
      <Box margin={0} width='100%' py={1} px={2} maxWidth={breakpoints.values.md} component='ul' display='flex' alignItems='center' justifyContent='space-between'>
        <IconButton size='medium' onClick={toggle}>
          {value ? <HiMoon /> : <HiSun />}
        </IconButton>
        <Box component='div' display='flex' alignItems='center'>
          {Constants.Navigation?.map(({ primary, href }) => (
            <Link href={href} key={primary}>
              <a>
                <DefaultButton size='small'>
                  {primary}
                </DefaultButton>
              </a>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
