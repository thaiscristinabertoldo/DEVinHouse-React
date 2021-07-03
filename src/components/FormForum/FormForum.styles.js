import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(8),
  },
  formItem: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  divArray: {
    display: 'flex',
  },
  input: {
    marginRight: theme.spacing(1),
    flex: 1,
  },
  icon: {
    color: theme.palette.error.main,
  },
}))
