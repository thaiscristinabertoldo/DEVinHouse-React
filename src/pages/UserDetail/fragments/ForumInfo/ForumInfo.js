import { Grid, Typography } from '@material-ui/core'

import { CardContainer } from '../../../../components'
import { useStyles } from './ForumInfo.styles'

export const ForumInfo = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <CardContainer>
          <div className={classes.forum}>
            <Typography variant="h5">Respostas no fórum</Typography>
            <Typography variant="h4">10</Typography>
          </div>
        </CardContainer>
      </Grid>

      <Grid item xs={6}>
        <CardContainer>
          <div className={classes.forum}>
            <Typography variant="h5">Tópicos criados</Typography>
            <Typography variant="h4">2</Typography>
          </div>
        </CardContainer>
      </Grid>
    </Grid>
  )
}
