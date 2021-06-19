import { Box, Drawer, List, ListItem, makeStyles, MenuItem, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Link from 'next/link'
import useDarkMode from "use-dark-mode";
import Constants from "../constants";
import useScrollPosition from "../hooks/useScrollPosition";
import DefaultButton from '../style-guide/DefaultButton'
import IconButton from '../style-guide/IconButton'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useState } from "react";
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

const useStyles = makeStyles(theme => ({
  container: {
    background: `${theme.palette.background.default}50`,
    backdropFilter: 'blur(10.0px)',
    '-webkit-backdrop-filter': 'blur(10.0px)',
    borderBottom: theme.palette.background.paper,
    zIndex: theme.zIndex.appBar,
    transition: 'box-shadow .15s ease-in-out, background-color .25s ease-in-out'
  },

  drawer: {
    background: `${theme.palette.background.default}90`,
    backdropFilter: 'blur(10.0px)',
    '-webkit-backdrop-filter': 'blur(10.0px)',
    transition: 'box-shadow .15s ease-in-out, background-color .25s ease-in-out'
  },
}))

export default function Header() {
  const classes = useStyles()
  const { shadows, breakpoints, spacing } = useTheme()
  const { scrollY } = useScrollPosition()
  const isSmall = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`);
  const { value, toggle } = useDarkMode(true)
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(v => !v)

  return (
    <>
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
          <Box flex={1}>
            <IconButton size='medium' onClick={toggle}>
              {value ? <HiMoon /> : <HiSun />}
            </IconButton>
          </Box>
          <Box flex={1}>
            <Link href='/'>
              <Typography style={{ cursor: 'pointer', textAlign: 'center' }} variant='h3'>
                Alon Zuman
              </Typography>
            </Link>
          </Box>
          <Box component='div' display='flex' alignItems='center' flex={1} justifyContent='flex-end'>
            {!isSmall ? (
              <>
                {Constants.Navigation?.map(({ primary, href }) => (
                  <Link href={href} key={primary}>
                    <a>
                      <DefaultButton size='small'>
                        {primary}
                      </DefaultButton>
                    </a>
                  </Link>
                ))}
              </>
            ) : (
              <IconButton size='medium' onClick={toggleMenu}>
                <HiOutlineMenuAlt4 size={24} />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
      <Drawer PaperProps={{ className: classes.drawer }} anchor='right' open={!!open} onClose={toggleMenu}>
        <List>
          <Box py={1} px={1} mb={2}>
            <IconButton size='medium' onClick={toggleMenu}>
              <IoMdClose size={24} />
            </IconButton>
          </Box>
          {Constants.Navigation?.map(({ primary, href }) => (
            <Link href={href} key={primary}>
              <a>
                <MenuItem disableRipple onClick={toggleMenu} style={{ minWidth: spacing(28) }}>
                  {primary}
                </MenuItem>
              </a>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  )
}
