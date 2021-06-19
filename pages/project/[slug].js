import API from "../../src/API"
import Meta from "../../src/components/Meta"
import Container from "../../src/style-guide/Container"
import BlockContent from '@sanity/block-content-to-react'
import BackButton from "../../src/style-guide/BackButton"
import { makeStyles, Typography } from "@material-ui/core"
import { sanityClient } from "../../sanity"
import SanityImage from "../../src/components/SanityImage"

export const getServerSideProps = async (context) => {
  const project = await API.Projects.getProjectBySlug(context.params.slug)

  return {
    props: project
  }
}


const useStyles = makeStyles(theme => ({
  heroContainer: {
    maxWidth: theme.breakpoints.values.md,
    margin: 'auto',

    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3)
    },
  },

  hero: {
    width: '100%',
    objectFit: 'cover',
    maxWidth: theme.breakpoints.values.md,
  },

  mainImageLabel: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),

    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0)
    },
  },

  avatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    borderRadius: theme.spacing(6)
  },

  title: {
    marginTop: theme.spacing(2)
  },

  subtitle: {

  }
}))

export default function Project(props) {
  const classes = useStyles()

  return (
    <>
      <Meta
        title={props?.title}
        meta={{
          name: 'description',
          content: props?.description
        }}
      />
      <Container style={{ minHeight: 0 }}>
        <BackButton />
      </Container>
      <div className={classes.heroContainer}>
        <SanityImage className={classes.hero} image={props?.mainImage} />
        <Typography className={classes.mainImageLabel} variant='subtitle2' color='textSecondary'>{props?.mainImageLabel}</Typography>
      </div>
      <Container style={{ minHeight: 0 }}>
        <BlockContent
          blocks={props?.body}
          imageOptions={{ h: 320 }}
          {...sanityClient.config()}
        />
      </Container>
    </>
  )
}
