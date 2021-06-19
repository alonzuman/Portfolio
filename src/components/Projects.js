import { Box, Grid, List, ListItemText, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import SanityImage from "./SanityImage";
import Link from 'next/link'
import { isEven } from "../utils";
import Chip from "../style-guide/Chip";

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: theme.spacing(1),
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    filter: 'brightness(.9)'
  },
}))

export default function Projects({ data }) {
  const { breakpoints } = useTheme()
  const isSmall = useMediaQuery(`(max-width:${breakpoints.values.sm}px)`);
  const classes = useStyles()

  return (
    <List>
      {data?.map((v, i) => (
        // <Link href={`/project/${v?.slug?.current}`}>
        <Box display='flex' flexDirection={isSmall ? 'column' : isEven(i) ? 'row-reverse' : 'row'} mb={8} py={1}>
          <Box flexShrink={0} flex={isSmall ? '' : 1}>
            <SanityImage image={v?.mainImage} className={classes.image} />
          </Box>
          <Box px={2} py={1} display='flex' flexDirection='column' flex={isSmall ? '' : 1}>
            <Box flex={1} mb={1}>
              <Typography variant='h3'>{v?.title}</Typography>
              <Typography variant='body1' color='textSecondary'>{v?.description}</Typography>
            </Box>
            <Grid container spacing={1}>
              {v?.categories?.map(c => (
                <Grid item>
                  <Chip
                    color='primary'
                    //  variant='outlined'
                    size='small'
                    label={c}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        // </Link>
      ))}
    </List>
  )
}
