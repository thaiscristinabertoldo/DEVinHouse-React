import { Button, Grid, Typography } from '@material-ui/core'

import { CardContainer } from '../../../../components'
import { useStyles } from './About.styles'

export const About = ({ about, socialNetwork = [] }) => {
  const classes = useStyles()
  return (
    <CardContainer>
      <div className={classes.item}>
        <Typography variant="h5">Sobre</Typography>
      </div>

      <div className={classes.item}>
        <Typography variant="subtitle1">{about}</Typography>
      </div>

      <Grid container spacing={2}>
        {socialNetwork.map((item) => {
          return (
            <Grid item key={item.id}>
              <Button href={item.url} target="blank" variant="contained">
                {item?.name}
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </CardContainer>
  )
}
