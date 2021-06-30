import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { ListItemIcon, Menu, MenuItem, Typography } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import ForumIcon from '@material-ui/icons/Forum'

export const MenuContainer = ({ anchorEl, open, onClose }) => {
  const history = useHistory()

  const handleClick = (path) => {
    onClose()
    history.push(path)
  }

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={onClose}
        PaperProps={{
          style: {
            width: '24ch',
          },
        }}
      >
        <MenuItem onClick={() => handleClick('/forums')}>
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <Typography variant="inherit">Fóruns</Typography>
        </MenuItem>

        <MenuItem onClick={() => handleClick('users')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Typography variant="inherit">Usuários</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

MenuContainer.propTypes = {
  anchorEl: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
