import { Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { CardContainer } from '../../components'
import { useStyles } from './UserDetailSkeleton.styles'

export const UserDetailSkeleton = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={4}>
        <div className={classes.cardInfo}>
          <CardContainer>
            <div className={classes.container}>
              <Skeleton animation="wave" variant="circle" width={80} height={80} />
              <Skeleton animation="wave" width="100%" height={40} />
              <Skeleton animation="wave" width="100%" height={40} />
              <Skeleton animation="wave" width="100%" height={40} />
            </div>
          </CardContainer>
        </div>

        <CardContainer>
          <Skeleton animation="wave" width="50%" />
          <Skeleton animation="wave" height={40} />
        </CardContainer>
      </Grid>

      <Grid item xs={8}>
        <div className={classes.cardInfo}>
          <CardContainer>
            <Skeleton animation="wave" height={40} />
            <Skeleton animation="wave" height={100} />
          </CardContainer>
        </div>

        <div className={classes.cardInfo}>
          <CardContainer>
            <Skeleton animation="wave" height={40} />
            <Skeleton animation="wave" height={40} />
          </CardContainer>
        </div>

        <div className={classes.cardInfo}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <CardContainer>
                <Skeleton animation="wave" height={40} />
              </CardContainer>
            </Grid>

            <Grid item xs={6}>
              <CardContainer>
                <Skeleton animation="wave" height={40} />
              </CardContainer>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  )
}
