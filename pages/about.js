import { Typography } from '@material-ui/core'
import data from '../src/data'
import Container from '../src/style-guide/Container'

export default function about() {
  return (
    <Container>
      <Typography variant='h2' component='h1'>About</Typography>
      <Typography variant='body1' color='textSecondary' dangerouslySetInnerHTML={{ __html: data.about.content }} />
    </Container>
  )
}
