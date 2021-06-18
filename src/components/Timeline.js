import { ListItemIcon, List, Divider, Typography, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  list: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },

  divider: {
    marginTop: theme.spacing(2)
  }
}))

export default function Timeline({ data }) {
  const classes = useStyles()

  return (
    <>
      {data?.map(v => (
        <List key={v?.year} component='ul' className={classes.list}>
          <Typography color='primary' variant='h3'>{v?.year}</Typography>
          {v?.sections?.map(section => {
            if (section?.href) return (
              <Link href={section?.href} key={section?.primary}>
                <a target='_blank'>
                  <ListItem button key={section?.primary} disableGutters>
                    <ListItemIcon>
                      <CheckIcon size={16} />
                    </ListItemIcon>
                    <ListItemText  {...section} />
                  </ListItem>
                </a>
              </Link>
            )

            return (
              <ListItem key={section?.primary} disableGutters>
                <ListItemIcon>
                  <CheckIcon size={16} />
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
