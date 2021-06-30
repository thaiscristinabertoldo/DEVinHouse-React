import { Grid } from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../services/user'

import { About, Connections, ForumInfo, Technologies, UserInfo } from './fragments'
import { useStyles } from './UserDetail.styles'
import { UserDetailSkeleton } from './UserDetailSkeleton'

export const UserDetail = () => {
  const { id } = useParams()
  const classes = useStyles()
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function findUser() {
      const userDetail = await getUser(parseInt(id))

      setUser(userDetail)
      setIsLoading(false)
    }

    findUser()
  }, [id])

  return (
    <Grid container spacing={8} direction="row" justify="flex-start" alignItems="flex-start">
      {isLoading && <UserDetailSkeleton />}

      {!isLoading && (
        <>
          <Grid item xs={4}>
            <div className={classes.cardInfo}>
              <UserInfo user={user} />
            </div>

            <Connections connections={user?.connections} />
          </Grid>

          <Grid item xs={8}>
            <div className={classes.cardInfo}>
              <About about={user?.about} socialNetwork={user?.socialNetwork} />
            </div>

            <div className={classes.cardInfo}>
              <Technologies technologies={user.technologies} />
            </div>

            <div className={classes.cardInfo}>
              <ForumInfo activities={user.activities} />
            </div>
          </Grid>
        </>
      )}
    </Grid>
  )
}
