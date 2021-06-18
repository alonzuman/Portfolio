import { Typography } from '@material-ui/core'
import Container from "../../src/style-guide/Container";

const server = 'https://jsonplaceholder.typicode.com'

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/posts`)

  const articles = await res.json()

  const ids = articles.map((post) => post.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const post = await fetch(`${server}/posts/${context.params.id}`).then(res => res.json())

  return {
    props: post,
  }
}


export default function ({ title, body, ...rest }) {
  console.log(rest)

  return (
    <Container>
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='body1' color='textSecondary'>{body}</Typography>
    </Container>
  )
}
