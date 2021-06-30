import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
    justifyContent: 'center',
  },
}))
