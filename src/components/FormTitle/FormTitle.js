import { Divider, Typography } from '@material-ui/core'
import { useStyles } from './FormTitle.styles'

export const FormTitle = ({ title }) => {
  const classes = useStyles()
  return (
    <div className={classes.formTitle}>
      <Typography variant="subtitle2" color="textSecondary">
        {title}
      </Typography>
      <Divider />
    </div>
  )
}
