import { Typography, Box } from '@material-ui/core'

export default function Section({ primary, secondary, children, containerProps, primaryProps, secondaryProps }) {
  return (
    <Box mt={8} component='section' {...containerProps}>
      {!!primary && <Typography {...primaryProps} variant='h2'>{primary}</Typography>}
      {!!secondary && <Typography {...secondaryProps} variant='body1' color='textSecondary'>{secondary}</Typography>}
      {children}
    </Box>
  )
}
