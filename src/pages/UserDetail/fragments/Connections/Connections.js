import { Avatar, Typography } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

import { CardContainer } from '../../../../components'
import { avatarUrl } from '../../../../helpers'

export const Connections = () => (
  <CardContainer>
    <Typography variant="subtitle2">Conexões</Typography>

    <AvatarGroup max={6}>
      <Avatar alt="Avatar" src={avatarUrl()} />
      <Avatar alt="Avatar" src={avatarUrl()} />
      <Avatar alt="Avatar" src={avatarUrl()} />
      <Avatar alt="Avatar" src={avatarUrl()} />
      <Avatar alt="Avatar" src={avatarUrl()} />
      <Avatar alt="Avatar" src={avatarUrl()} />
      <Avatar alt="Avatar" src={avatarUrl()} />
    </AvatarGroup>
  </CardContainer>
)
