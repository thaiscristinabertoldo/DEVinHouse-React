import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  item: {
    marginBottom: theme.spacing(2),
  },
  comments: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '8px',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))
