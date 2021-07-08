import { Grid } from '@material-ui/core'

import { Search } from '../../components'
import { CardUser } from './fragments'

export const Users = () => (
  <>
    <Search />
    <Grid container spacing={8} direction="row" justify="flex-start" alignItems="flex-start">
      <Grid item xs={6}>
        <CardUser
          user={{
            name: 'Thais',
            occupation: 'Front-end developer',
            about:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <CardUser
          user={{
            name: 'João',
            occupation: 'Back-end developer',
            about:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          }}
        />
      </Grid>
    </Grid>
  </>
)
