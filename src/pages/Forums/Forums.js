import { useEffect, useState } from 'react'

import { Fab, Grid, useTheme, Zoom } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { Search } from '../../components'
import { getForums } from '../../services'
import { useStyles } from './Forums.styles'
import { ForumItem, ForumItemSkeleton } from './fragments'

export const Forums = () => {
  const classes = useStyles()
  const theme = useTheme()

  const [forums, setForums] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function listUsers() {
      const usersList = await getForums()
      setForums(usersList)
      setIsLoading(false)
    }

    listUsers()
  }, [])

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  return (
    <>
      <Search />

      {isLoading && <ForumItemSkeleton />}

      <Grid container spacing={8}>
        {forums.map((forum) => (
          <ForumItem key={forum.id} forum={forum} />
        ))}
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
