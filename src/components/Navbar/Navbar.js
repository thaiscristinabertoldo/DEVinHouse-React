import { useState } from 'react'

import PropTypes from 'prop-types'

import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography, useTheme } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import Brightness4 from '@material-ui/icons/Brightness4'
import Brightness7 from '@material-ui/icons/Brightness7'

import { useStyles } from './Navbar.styles'
import { MenuContainer } from './fragments/MenuContainer/MenuContainer'

export const NavBar = ({ toggleTheme }) => {
  const classes = useStyles()
  const { palette } = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const menuOpen = Boolean(anchorEl)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
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
            <IconButton aria-label="Alternar tema claro/escuro" onClick={toggleTheme}>
              {palette?.type === 'dark' ? (
                <Brightness4 className={classes.iconColor} />
              ) : (
                <Brightness7 className={classes.iconColor} />
              )}
            </IconButton>
          </Tooltip>

          <Button color="inherit">Entrar</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
}
