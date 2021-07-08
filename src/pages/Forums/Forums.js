import { useEffect, useState } from 'react'

import { format } from 'date-fns'
import { useSnackbar } from 'notistack'
import { Dialog, DialogContent, Fab, Grid, useTheme, Zoom } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { FormForum, Search } from '../../components'
import { getForums } from '../../services'
import { useStyles } from './Forums.styles'
import { ForumItem, ForumItemSkeleton } from './fragments'
import { generateId } from '../../helpers/generateId'

export const Forums = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { enqueueSnackbar } = useSnackbar()

  const [forums, setForums] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  useEffect(() => {
    async function listForum() {
      const forumList = await getForums()
      setForums(forumList)
      setIsLoading(false)
    }

    listForum()
  }, [])

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      const forum = {
        ...values,
        date: format(new Date(), 'dd/MM/yyyy HH:mm'),
        id: generateId(),
      }

      setForums((old) => [...old, forum])
      setSubmitting(false)
      handleCloseDialog()
      const error = values.question.title === 'error'
      enqueueSnackbar(error ? 'Falha ao salvar!' : 'Adicionado com sucesso!', {
        variant: error ? 'error' : 'success',
      })
    }, 400)
  }

  return (
    <>
      <Search />

      {isLoading && <ForumItemSkeleton />}

      <Grid container spacing={8} data-testid="gridContainer">
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
        <Fab color="primary" aria-label="Adicionar" className={classes.fab} onClick={() => setOpenDialog(true)}>
          <AddIcon />
        </Fab>
      </Zoom>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent className={classes.dialog}>
          <FormForum onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    </>
  )
}
