import { Button, Typography } from '@material-ui/core'

import { AvatarInfo, CardContainer } from '../../../../components'
import { useStyles } from './UserInfo.styles'

export const UserInfo = ({ user }) => {
  const classes = useStyles()
  console.log('aaaa', user)
  return (
    <CardContainer>
      <div className={classes.container}>
        <div className={classes.item}>
          <AvatarInfo size="large" />
        </div>

        <div className={classes.item}>
          <Typography variant="h4" align="center">
            {user?.name}
          </Typography>
        </div>

        <div className={classes.item}>
          <Typography variant="h6" align="center">
            {user?.occupation}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {`${user?.address?.city || '-'}, 
            ${user?.address?.state || '-'}, 
            ${user?.address?.country || '-'}`}
          </Typography>
        </div>

        <Button variant="contained" color="primary">
          + Conectar
        </Button>
      </div>
    </CardContainer>
  )
}
