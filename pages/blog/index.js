import { Typography } from '@material-ui/core'
import Container from "../../src/style-guide/Container";
import BlogPosts from "../../src/components/BlogPosts";

const MOCK_API = 'https://jsonplaceholder.typicode.com/posts'

export const getStaticProps = async () => {
  const posts = await fetch(MOCK_API).then(response => response.json())

  return {
    props: {
      posts,
    }
  }
}

export default function index({ posts }) {
  return (
    <Container>
      <Typography variant='h2' component='h1'>Blog</Typography>
      <BlogPosts data={posts} />
    </Container>
  )
}
