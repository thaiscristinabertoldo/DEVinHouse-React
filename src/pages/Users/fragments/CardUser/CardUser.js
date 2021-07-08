import PropTypes from 'prop-types'

import { Button, Typography } from '@material-ui/core'

import { AvatarInfo, CardContainer } from '../../../../components'
import { AvatarAdditionalInfo } from '../AvatarAdditionalInfo'
import { useStyles } from './CardUser.styles'

export const CardUser = ({ user }) => {
  const classes = useStyles()

  return (
    <CardContainer>
      <AvatarInfo additionalComponent={<AvatarAdditionalInfo name={user.name} occupation={user.occupation} />} />

      {user.about && (
        <div className={classes.about}>
          <Typography variant="body2">{user.about}</Typography>
        </div>
      )}

      <div className={classes.button}>
        <Button variant="contained" color="primary">
          + Conectar
        </Button>
      </div>
    </CardContainer>
  )
}

CardUser.propTypes = {
  user: PropTypes.object.isRequired,
}
