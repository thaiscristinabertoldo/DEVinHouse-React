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
    marginBottom: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
  },
}))
