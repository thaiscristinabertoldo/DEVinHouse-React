import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'

export const AvatarAdditionalInfo = ({ name, occupation }) => (
  <>
    <Typography variant="h5">{name}</Typography>
    {occupation && <Typography variant="subtitle1">{occupation}</Typography>}
  </>
)

AvatarAdditionalInfo.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string,
}
