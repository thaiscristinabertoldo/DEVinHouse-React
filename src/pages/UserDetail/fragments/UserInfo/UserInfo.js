import { Button, Typography } from '@material-ui/core'

import { AvatarInfo, CardContainer } from '../../../../components'
import { useStyles } from './UserInfo.styles'

export const UserInfo = () => {
  const classes = useStyles()

  return (
    <CardContainer>
      <div className={classes.container}>
        <div className={classes.item}>
          <AvatarInfo size="large" />
        </div>

        <div className={classes.item}>
          <Typography variant="h4">Thais</Typography>
        </div>

        <div className={classes.item}>
          <Typography variant="h6">Front-end developer</Typography>
          <Typography variant="subtitle1">Pato Branco, PR, Brasil</Typography>
        </div>

        <Button variant="contained" color="primary">
          + Conectar
        </Button>
      </div>
    </CardContainer>
  )
}
