import { Box, Typography, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import Link from 'next/link'
import { format } from 'date-fns'
import SanityImage from "./SanityImage";
import { formatPostDate } from "../utils";

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: theme.spacing(1),
    objectFit: 'cover'
  },

  date: {
    flexShrink: 0,
    marginLeft: theme.spacing(1)
  }
}))

export default function BlogPosts({ data }) {
  const classes = useStyles()

  return (
    <List >
      {data?.map(v => (
        <Link href={`/blog/${v?.slug?.current}`} key={v?.slug?.current}>
          <a>
            <ListItem button disableRipple disableGutters>
              <Box mr={2} height={96} width={96} flexShrink={0}>
                <SanityImage image={v?.mainImage} className={classes.image} />
              </Box>
              <ListItemText
                disableTypography
                primary={(
                  <Box component='span' display='flex' alignItems='flex-start' justifyContent='space-between'>
                    <Typography component='h3' variant='h4'>{v?.title}</Typography>
                    <Typography className={classes.date} variant='subtitle2' color='textSecondary'>{formatPostDate(v?._createdAt)}</Typography>
                  </Box>
                )}
                secondary={(
                  <Typography noWrap variant='body1' color='textSecondary'>
                    {v?.description}
                  </Typography>
                )}
              />
            </ListItem>
          </a>
        </Link>
      ))}
    </List>
  )
}
