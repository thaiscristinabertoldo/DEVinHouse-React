import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import { useStyles } from './AvatarAdditionalInfo.styles'

export const AvatarAdditionalInfo = ({ name, date, text, variantText = 'h5' }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.title}>
        <Typography variant="subtitle2">{name}</Typography>

        <div className={classes.date}>
          <Typography variant="caption">{date}</Typography>
        </div>
      </div>
      <Typography variant={variantText}>{text}</Typography>
    </>
  )
}

AvatarAdditionalInfo.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variantText: PropTypes.string,
}
