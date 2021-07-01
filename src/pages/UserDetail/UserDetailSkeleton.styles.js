import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  cardInfo: {
    marginBottom: theme.spacing(8),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
