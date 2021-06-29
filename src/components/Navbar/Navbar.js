import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import Brightness4 from '@material-ui/icons/Brightness4'

import { useStyles } from './Navbar.styles'

export const NavBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DEVinHouse
          </Typography>
          <Tooltip title="Add" aria-label="add">
            <IconButton aria-label="Alternar tema claro/escuro">
              <Brightness4 className={classes.iconColor} />
            </IconButton>
          </Tooltip>
          <Button color="inherit">Entrar</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
