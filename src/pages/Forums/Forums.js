import {
  Badge,
  Button,
  Chip,
  Divider,
  Fab,
  Grid,
  IconButton,
  OutlinedInput,
  Typography,
  useTheme,
  Zoom,
} from '@material-ui/core'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'

import { AvatarInfo, CardContainer, Search } from '../../components'
import { AvatarAdditionalInfo, Comments } from './fragments'
import { useStyles } from './Forums.styles'

export const Forums = () => {
  const classes = useStyles()
  const theme = useTheme()

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <>
      <Search />

      <Grid container spacing={8}>
        <Grid item xs={12}>
          <CardContainer>
            <div className={classes.item}>
              <AvatarInfo
                additionalComponent={
                  <AvatarAdditionalInfo name={'Thais'} date="23/05/2020" text="Lorem Ipsum is simply dummy text?" />
                }
              />
            </div>

            <div className={classes.item}>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </Typography>
            </div>

            <div className={classes.item}>
              <Grid container spacing={2}>
                <Grid item>
                  <Chip variant="outlined" color="primary" label="JavaScript" />
                </Grid>
              </Grid>
            </div>

            <div className={classes.item}>
              <Divider />
            </div>

            <div className={classes.actions}>
              <IconButton aria-label="Curtir">
                <Badge badgeContent={4} color="secondary">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>

              <IconButton aria-label="Comentários">
                <Badge badgeContent={2} color="secondary">
                  <ForumIcon />
                </Badge>
              </IconButton>
            </div>

            <div className={classes.item}>
              <Typography variant="h5">Comentários</Typography>
            </div>

            <Comments
              name={'Ana'}
              date="23/05/2020"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
            />

            <Comments
              date="23/05/2020"
              name="João"
              text="Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
            />

            <div className={classes.inputContainer}>
              <div className={classes.input}>
                <OutlinedInput fullWidth placeholder="Comente aqui..." />
              </div>

              <Button variant="contained" color="primary">
                Comentar
              </Button>
            </div>
          </CardContainer>
        </Grid>
      </Grid>

      <Zoom
        in
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        unmountOnExit
      >
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Zoom>
    </>
  )
}
