import { Button, Grid, Typography } from '@material-ui/core'

import { CardContainer } from '../../../../components'
import { useStyles } from './About.styles'

export const About = () => {
  const classes = useStyles()
  return (
    <CardContainer>
      <div className={classes.item}>
        <Typography variant="h5">Sobre</Typography>
      </div>

      <div className={classes.item}>
        <Typography variant="subtitle1">
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.',
        </Typography>
      </div>

      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained">GitHub</Button>
        </Grid>

        <Grid item>
          <Button variant="contained">LinkedIn</Button>
        </Grid>
      </Grid>
    </CardContainer>
  )
}
