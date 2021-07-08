import PropTypes from 'prop-types'

import { Avatar } from '@material-ui/core'
import { useStyles } from './AvatarInfo.styles'
import { avatarUrl } from '../../helpers'

export const AvatarInfo = ({ additionalComponent, size = 'default' }) => {
  const classes = useStyles()

  const image = avatarUrl()

  return (
    <div className={classes.root}>
      <Avatar alt="Avatar" src={image} className={size === 'large' ? classes.avatarLarge : classes.avatar} />

      {additionalComponent && <div className={classes.text}>{additionalComponent}</div>}
    </div>
  )
}

AvatarInfo.propTypes = {
  additionalComponent: PropTypes.node,
  size: PropTypes.oneOf(['large', 'default']),
}
