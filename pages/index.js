import { Box, Typography, makeStyles } from '@material-ui/core'
import Meta from '../src/components/Meta'
import data from '../src/data'
import Container from '../src/style-guide/Container'
import Section from '../src/style-guide/Section'
import BlogPosts from '../src/components/BlogPosts'
import Timeline from '../src/components/Timeline'
import { motion } from 'framer-motion'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(1)
  }
}))

const MOCK_API = 'https://jsonplaceholder.typicode.com/posts'

export const getStaticProps = async () => {
  const topBlogPosts = await fetch(MOCK_API).then(response => response.json())

  // TODO move them to a cms
  const hero = data.home.hero
  const timeline = data.home.timeline

  return {
    props: {
      hero,
      topBlogPosts,
      timeline
    }
  }
}

export default function Home({ topBlogPosts, timeline, hero }) {
  const classes = useStyles()

  return (
    <>
      <Meta
        title='Alon Zuman - Developer & Designer'
        meta={{
          name: 'descriiption',
          content: 'This is my portfolio'
        }}
        links={<link rel="icon" href="/favicon.ico" />}
      />
      <Container>
        <Box component='section' mt={8} mb={8}>
          <Typography className={classes.title} variant='h1' dangerouslySetInnerHTML={{ __html: hero.primary }} />
          <Typography variant='h4' color='textSecondary' component='h2' dangerouslySetInnerHTML={{ __html: hero.secondary }} />
        </Box>
        <Section primary='My Most Recent Blog Posts 📖'>
          <BlogPosts data={topBlogPosts?.slice(0, 3)} />
        </Section>
        <Section primary='My Timeline ⌛'>
          <Timeline data={timeline} />
        </Section>
      </Container>
    </>
  )
}
