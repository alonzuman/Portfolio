import { Box, Typography, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import Link from 'next/link'
import { format } from 'date-fns'
import SanityImage from "./SanityImage";
import { formatPostDate } from "../utils";

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: theme.spacing(1)
  }
}))

export default function BlogPosts({ data }) {
  const classes = useStyles()
  console.log(data);

  return (
    <List disablePadding>
      {data?.map(v => (
        <Link href={`/blog/${v?.slug?.current}`} key={v?.slug?.current}>
          <a>
            <ListItem disableRipple disableGutters button>
              <Box mr={2} height={96} width={96}>
                <SanityImage image={v?.mainImage} className={classes.image} />
              </Box>
              <ListItemText
                disableTypography
                primary={(
                  <Box component='span' display='flex' alignItems='flex-start' justifyContent='space-between'>
                    <Typography variant='h3'>{v?.title}</Typography>
                    <Typography variant='subtitle2' color='textSecondary'>{formatPostDate(v?._createdAt)}</Typography>
                  </Box>
                )}
                secondary={(
                  <Typography variant='body1' color='textSecondary'>
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
