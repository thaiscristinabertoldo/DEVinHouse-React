import PropTypes from 'prop-types'

import { AvatarInfo } from '../../../../components'
import { AvatarAdditionalInfo } from '../AvatarAdditionalInfo'
import { useStyles } from './Comments.styles'

export const Comments = ({ name, date, text }) => {
  const classes = useStyles()

  return (
    <div className={classes.comments}>
      <div className={classes.item}>
        <AvatarInfo
          additionalComponent={<AvatarAdditionalInfo name={name} date={date} text={text} variantText="body2" />}
        />
      </div>
    </div>
  )
}

Comments.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
