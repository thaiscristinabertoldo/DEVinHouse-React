import { Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { CardContainer } from '../../../../components'
import { useStyles } from './UserItemSkeleton.styles'

export const UserItemSkeleton = () => {
  const classes = useStyles()

  const items = [1, 2]
  return (
    <Grid container spacing={8}>
      {items.map((item) => (
        <Grid key={item} item xs={6}>
          <CardContainer>
            <div className={classes.root}>
              <Skeleton animation="wave" variant="circle" width={80} height={80} />
              <div className={classes.text}>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
              </div>
            </div>
            <Skeleton type="rect" animation="wave" height={120} />
          </CardContainer>
        </Grid>
      ))}
    </Grid>
  )
}
