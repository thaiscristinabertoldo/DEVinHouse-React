import { Chip, Grid, Typography } from '@material-ui/core'
import { CardContainer } from '../../../../components'
import { useStyles } from './Technologies.styles'

export const Technologies = ({ technologies = [] }) => {
  const classes = useStyles()

  return (
    <CardContainer>
      <div className={classes.item}>
        <Typography variant="h5">Tecnologias</Typography>
      </div>

      <Grid container spacing={2}>
        {technologies.map((item) => (
          <Grid item>
            <Chip variant="outlined" color="primary" label={item} />
          </Grid>
        ))}
      </Grid>
    </CardContainer>
  )
}
