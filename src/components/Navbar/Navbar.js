import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography, useTheme } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import Brightness4 from '@material-ui/icons/Brightness4'
import Brightness7 from '@material-ui/icons/Brightness7'

import { useStyles } from './Navbar.styles'
import { MenuContainer } from './fragments/MenuContainer/MenuContainer'

import { useAuth, useCustomTheme } from '../../contexts'

export const NavBar = () => {
  const classes = useStyles()
  const history = useHistory()
  const { signed, logout } = useAuth()
  const { onToggleTheme } = useCustomTheme()
  const { palette } = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const menuOpen = Boolean(anchorEl)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    await logout()
    history.push('/login')
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>

          <MenuContainer open={menuOpen} anchorEl={anchorEl} onClose={handleCloseMenu} />

          <Typography variant="h6" className={classes.title}>
            DEVinHouse
          </Typography>

          <Tooltip title="Add" aria-label="add">
            <IconButton aria-label="Alternar tema claro/escuro" onClick={onToggleTheme}>
              {palette?.type === 'dark' ? (
                <Brightness7 className={classes.iconColor} />
              ) : (
                <Brightness4 className={classes.iconColor} />
              )}
            </IconButton>
          </Tooltip>

          {signed && (
            <Button color="inherit" onClick={handleLogout}>
              Sair
            </Button>
          )}
          {!signed && (
            <Button color="inherit" onClick={() => history.push('/login')}>
              Entrar
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
