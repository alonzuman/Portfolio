import { Typography } from "@material-ui/core";
import { Box, useTheme } from "@material-ui/core";
import useClasses from "../hooks/useClasses";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const { breakpoints, palette } = useTheme()
  const classes = useClasses({
    text: {
      textAlign: 'center'
    }
  })

  return (
    <Box bgcolor={palette.background.default} component='footer' pt={2} pb={4} px={2} display='flex' justifyContent='center'>
      <Box width='100%' maxWidth={breakpoints?.values?.md} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <SocialIcons />
        <Typography className={classes.text} variant='body1' color='primary'>Designed and built by Alon Zuman</Typography>
      </Box>
    </Box>
  )
}
