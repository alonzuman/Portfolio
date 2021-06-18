import { Box, useTheme } from "@material-ui/core";
import Link from 'next/link'
import Constants from "../constants";
import Container from '../style-guide/Container'
import DefaultButton from '../style-guide/DefaultButton'

export default function Footer() {
  const { breakpoints, palette } = useTheme()

  return (
    <Box bgcolor={palette.background.default} component='footer' py={2} px={2} display='flex' justifyContent='center'>
      <Box component='ul' maxWidth={breakpoints?.values?.md}>
        {Constants.Navigation?.map(({ primary, href }) => (
          <Link href={href} key={primary}>
            <a>
              <DefaultButton size='small'>{primary}</DefaultButton>
            </a>
          </Link>
        ))}
      </Box>
    </Box>
  )
}
