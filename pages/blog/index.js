import { Typography } from '@material-ui/core'
import Container from "../../src/style-guide/Container";
import BlogPosts from "../../src/components/BlogPosts";
import API from '../../src/API';

export const getStaticProps = async () => {
  const posts = await API.Blog.getAllPosts()

  return {
    props: {
      posts,
    }
  }
}

export default function Blog({ posts }) {
  return (
    <Container>
      <Typography variant='h2' component='h1'>Blog</Typography>
      <BlogPosts data={posts} />
    </Container>
  )
}
