import { Typography, useTheme } from '@material-ui/core'
import data from '../src/data'
import Container from '../src/style-guide/Container'
import Meta from '../src/components/Meta'

export default function About() {
  const { spacing } = useTheme()

  return (
    <>
      <Meta
        title='About'
      />
      <Container>
        <Typography style={{ marginBottom: spacing(1) }} variant='h2' component='h1'>About</Typography>
        <Typography variant='body1' color='textSecondary' dangerouslySetInnerHTML={{ __html: data.about.content }} />
      </Container>
    </>
  )
}
