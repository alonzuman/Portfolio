import { Box, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import Link from 'next/link'

export default function BlogPosts({ data }) {
  return (
    <List disablePadding>
      {data?.map(v => (
        <Link href={`/blog/${v?.id}`} key={v?.id}>
          <a>
            <ListItem disableRipple disableGutters button>
              <ListItemText
                disableTypography
                primary={(
                  <Box component='span' display='flex' alignItems='flex-start' justifyContent='space-between'>
                    <Typography variant='h3'>{v?.title}</Typography>
                    <Typography variant='subtitle2' color='textSecondary'>June 12, 2021</Typography>
                  </Box>
                )}
                secondary={(
                  <Typography variant='body1' color='textSecondary'>
                    {v?.body}
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
