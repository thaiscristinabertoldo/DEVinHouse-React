import { Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { CardContainer } from '../../../../components'
import { useStyles } from './ForumItemSkeleton.styles'

export const ForumItemSkeleton = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} data-testid="loadingContainer">
      <CardContainer>
        <div className={classes.root}>
          <Skeleton animation="wave" variant="circle" width={80} height={80} />
          <div className={classes.text}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </div>
        </div>
        <Skeleton animation="wave" height={100} />

        <Skeleton animation="wave" height={40} />
      </CardContainer>
    </Grid>
  )
}
