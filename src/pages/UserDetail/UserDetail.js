import { Grid } from '@material-ui/core'

import { About, Connections, ForumInfo, Technologies, UserInfo } from './fragments'
import { useStyles } from './UserDetail.styles'

export const UserDetail = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={8} direction="row" justify="flex-start" alignItems="flex-start">
      <Grid item xs={4}>
        <div className={classes.cardInfo}>
          <UserInfo />
        </div>

        <Connections />
      </Grid>

      <Grid item xs={8}>
        <div className={classes.cardInfo}>
          <About />
        </div>

        <div className={classes.cardInfo}>
          <Technologies />
        </div>

        <div className={classes.cardInfo}>
          <ForumInfo />
        </div>
      </Grid>
    </Grid>
  )
}
