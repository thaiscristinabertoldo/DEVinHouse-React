import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Button, Typography } from '@material-ui/core'

import { AvatarInfo, CardContainer } from '../../../../components'
import { AvatarAdditionalInfo } from '../AvatarAdditionalInfo'
import { useStyles } from './UserItem.styles'

export const UserItem = ({ user }) => {
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
        <Link to={`/users/${user.id}`} className={classes.link}>
          <Button variant="outlined" color="secondary">
            Visualizar Perfil
          </Button>
        </Link>

        <Button variant="contained" color="primary">
          + Conectar
        </Button>
      </div>
    </CardContainer>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}
