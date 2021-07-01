import { Avatar, Typography } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

import { CardContainer } from '../../../../components'
import { avatarUrl } from '../../../../helpers'

export const Connections = ({ connections = [] }) => (
  <CardContainer>
    <Typography variant="subtitle2">Conexões</Typography>

    <AvatarGroup max={6}>
      {connections.map((item) => (
        <Avatar key={item?.id} alt={item?.name} src={avatarUrl()} />
      ))}
    </AvatarGroup>
  </CardContainer>
)
