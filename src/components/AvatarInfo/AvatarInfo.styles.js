import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  avatarLarge: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
    justifyContent: 'center',
  },
}))
