import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  item: {
    marginBottom: theme.spacing(2),
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}))
