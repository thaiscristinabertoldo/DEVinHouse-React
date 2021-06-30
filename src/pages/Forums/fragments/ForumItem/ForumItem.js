import { useState } from 'react'

import PropTypes from 'prop-types'

import { Badge, Button, Chip, Collapse, Divider, Grid, IconButton, OutlinedInput, Typography } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ForumIcon from '@material-ui/icons/Forum'

import { AvatarInfo, CardContainer } from '../../../../components'
import { useStyles } from './ForumItem.styles'
import { AvatarAdditionalInfo } from '../AvatarAdditionalInfo'
import { Comments } from '../Comments'

export const ForumItem = ({ forum }) => {
  const classes = useStyles()

  const [openComments, setOpenComments] = useState(false)

  return (
    <Grid item xs={12}>
      <CardContainer>
        <div className={classes.item}>
          <AvatarInfo
            additionalComponent={
              <AvatarAdditionalInfo name={forum.user.name} date={forum.date} text={forum.question.title} />
            }
          />
        </div>

        <div className={classes.item}>
          <Typography variant="body2">{forum.question?.details}</Typography>
        </div>

        <div className={classes.item}>
          <Grid container spacing={2}>
            {forum.question?.tags.map((tag) => {
              return (
                <Grid item key={tag}>
                  <Chip variant="outlined" color="primary" label={tag} />
                </Grid>
              )
            })}
          </Grid>
        </div>

        <div className={classes.item}>
          <Divider />
        </div>

        <div className={classes.actions}>
          <IconButton aria-label="Curtir">
            <Badge badgeContent={forum.totalLikes} color="secondary">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="Comentários" onClick={() => setOpenComments((value) => !value)}>
            <Badge badgeContent={forum.comments.length} color="secondary">
              <ForumIcon />
            </Badge>
          </IconButton>
        </div>

        <Collapse in={openComments}>
          <>
            <div className={classes.item}>
              <Typography variant="h5">Comentários</Typography>
            </div>

            {forum.comments.map((comment) => {
              return <Comments key={comment.id} name={comment.user.name} date={comment.date} text={comment.comment} />
            })}

            <div className={classes.inputContainer}>
              <div className={classes.input}>
                <OutlinedInput fullWidth placeholder="Comente aqui..." />
              </div>

              <Button variant="contained" color="primary">
                Comentar
              </Button>
            </div>
          </>
        </Collapse>
      </CardContainer>
    </Grid>
  )
}

ForumItem.propTypes = {
  forum: PropTypes.object.isRequired,
}
