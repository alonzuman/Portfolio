import { ListItemIcon, List, Divider, Typography, ListItem, ListItemText, makeStyles, Box } from "@material-ui/core";
import Link from 'next/link'
import { GiSpotedFlower } from 'react-icons/gi'
import { BsFillTriangleFill } from 'react-icons/bs'

const useStyles = makeStyles(theme => ({
  list: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },

  divider: {
    marginTop: theme.spacing(2)
  },

  icon: {
    marginLeft: theme.spacing(2)
  }
}))

export default function Timeline({ data }) {
  const classes = useStyles()

  return (
    <>
      {data?.map(v => (
        <List key={v?.year} component='ul' className={classes.list}>
          <Box px={2}>
            <Typography color='primary' variant='h3'>{v?.year}</Typography>
          </Box>
          {v?.sections?.map(section => {
            if (section?.href) return (
              <Link href={section?.href} key={section?.primary}>
                <a target='_blank'>
                  <ListItem button key={section?.primary} alignItems='flex-start'>
                    <ListItemIcon>
                      <BsFillTriangleFill className={classes.icon} size={12} />
                    </ListItemIcon>
                    <ListItemText  {...section} />
                  </ListItem>
                </a>
              </Link>
            )

            return (
              <ListItem key={section?.primary} alignItems='flex-start'>
                <ListItemIcon>
                  <BsFillTriangleFill className={classes.icon} size={12} />
                </ListItemIcon>
                <ListItemText  {...section} />
              </ListItem>
            )
          })}
          <Divider className={classes.divider} />
        </List>
      ))}
    </>
  )
}
