import { Grid, Typography } from '@material-ui/core'

import { CardContainer } from '../../../../components'
import { useStyles } from './ForumInfo.styles'

export const ForumInfo = ({ activities }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <CardContainer>
          <div className={classes.forum}>
            <Typography variant="subtitle1">Respostas no fórum</Typography>
            <Typography variant="h5">{activities.answersCount}</Typography>
          </div>
        </CardContainer>
      </Grid>

      <Grid item xs={6}>
        <CardContainer>
          <div className={classes.forum}>
            <Typography variant="subtitle1">Tópicos criados</Typography>
            <Typography variant="h5">{activities.topicsCount}</Typography>
          </div>
        </CardContainer>
      </Grid>
    </Grid>
  )
}
