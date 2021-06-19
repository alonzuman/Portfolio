import { ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core'
import API from '../../src/API';
import SanityImage from '../../src/components/SanityImage';
import Container from "../../src/style-guide/Container";
import BlockContent from '@sanity/block-content-to-react'
import { formatPostDate } from '../../src/utils';
import { sanityClient } from '../../sanity';

export const getStaticPaths = async () => {
  const posts = await API.Blog.getAllPosts()
  const slugs = posts.map((post) => post.slug?.current)
  const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const post = await API.Blog.getPostBySlug(context.params.slug)

  return {
    props: post,
  }
}

const useStyles = makeStyles(theme => ({
  hero: {
    height: 320,
    width: '100%',
    objectFit: 'cover'
  },

  avatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    borderRadius: theme.spacing(6)
  }
}))

export default function BlogPost(props) {
  const classes = useStyles()

  return (
    <Container>
      <SanityImage className={classes.hero} image={props?.mainImage} />
      <Typography variant='h1'>{props?.title}</Typography>
      <ListItem disableGutters>
        <ListItemAvatar>
          <SanityImage className={classes.avatar} image={props?.author?.image} />
        </ListItemAvatar>
        <ListItemText
          primary={props?.author?.name}
          secondary={formatPostDate(props?._createdAt)}
        />
      </ListItem>
      <BlockContent
        blocks={props?.body}
        imageOptions={{ h: 320 }}
        {...sanityClient.config()}
      />
    </Container>
  )
}
