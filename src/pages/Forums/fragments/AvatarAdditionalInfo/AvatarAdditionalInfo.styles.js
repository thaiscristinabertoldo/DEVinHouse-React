import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginLeft: theme.spacing(1),
  },
}))
