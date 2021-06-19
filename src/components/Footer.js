import { Box, useTheme } from "@material-ui/core";
import Link from 'next/link'
import Constants from "../constants";
import Container from '../style-guide/Container'
import DefaultButton from '../style-guide/DefaultButton'
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const { breakpoints, palette } = useTheme()

  return (
    <Box bgcolor={palette.background.default} component='footer' py={2} px={2} display='flex' justifyContent='center'>
      <Box width='100%' maxWidth={breakpoints?.values?.md} display='flex' alignItems='center' justifyContent='center'>
        <SocialIcons />
      </Box>
    </Box>
  )
}
