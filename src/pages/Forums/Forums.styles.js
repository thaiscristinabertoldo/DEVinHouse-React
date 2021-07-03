import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  dialog: {
    padding: theme.spacing(4),
    minWidth: '500px',
  },
}))
