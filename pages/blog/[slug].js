import { ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core'
import API from '../../src/API';
import SanityImage from '../../src/components/SanityImage';
import Container from "../../src/style-guide/Container";
import BlockContent from '@sanity/block-content-to-react'
import { formatPostDate } from '../../src/utils';
import { sanityClient } from '../../sanity';
import Meta from '../../src/components/Meta';
import BackButton from '../../src/style-guide/BackButton';

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
  },
}))

export default function BlogPost({ title, description, mainImage, author, _createdAt, body }) {
  const classes = useStyles()
  return (
    <>
      <Meta
        title={title}
        meta={{
          name: 'description',
          content: description
        }}
      />
      <Container>
        <BackButton />
        <SanityImage className={classes.hero} image={mainImage} />
        <Typography variant='h1'>{title}</Typography>
        <ListItem disableGutters>
          <ListItemAvatar>
            <SanityImage className={classes.avatar} image={author?.image} />
          </ListItemAvatar>
          <ListItemText
            primary={author?.name}
            secondary={formatPostDate(_createdAt)}
          />
        </ListItem>
        <BlockContent
          blocks={body}
          imageOptions={{ h: 320 }}
          {...sanityClient.config()}
        />
      </Container>
    </>
  )
}
