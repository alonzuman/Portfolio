import { Box, Typography, makeStyles } from '@material-ui/core'
import Meta from '../src/components/Meta'
import data from '../src/data'
import Container from '../src/style-guide/Container'
import Section from '../src/style-guide/Section'
import BlogPosts from '../src/components/BlogPosts'
import Timeline from '../src/components/Timeline'
import API from '../src/API'
import Projects from '../src/components/Projects'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(1)
  },

  subtitle: {
    fontWeight: 400
  }
}))


export const getStaticProps = async () => {
  const topBlogPosts = await API.Blog.getAllPosts()
  const projects = await API.Projects.getAllProjects()

  // TODO: move them to a cms
  const hero = data.home.hero
  const timeline = data.home.timeline

  return {
    props: {
      hero,
      topBlogPosts,
      projects,
      timeline
    }
  }
}

export default function Home({ topBlogPosts, timeline, hero, projects }) {
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
          <Typography className={classes.subtitle} variant='h4' color='textSecondary' component='h2' dangerouslySetInnerHTML={{ __html: hero.secondary }} />
        </Box>
        {/* <video loop autoPlay muted playsInline style={{ width: '100%' }}>
          <source src='HeroVideo.mp4' type='video/mp4' />
        </video> */}
        <Section primary='From the Blog'>
          <BlogPosts data={topBlogPosts?.slice(0, 3)} />
        </Section>
        <Section primary='My Projects'>
          <Projects data={projects} />
        </Section>
        <Section primary='My Journey'>
          <Timeline data={timeline} />
        </Section>
      </Container>
    </>
  )
}
