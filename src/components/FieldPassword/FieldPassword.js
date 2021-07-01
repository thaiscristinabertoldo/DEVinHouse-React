import { IconButton, InputAdornment, OutlinedInput } from '@material-ui/core'
import { Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon } from '@material-ui/icons'
import { useState } from 'react'

export const FieldPassword = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <OutlinedInput
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="ver senha"
            onClick={() => setShowPassword((value) => !value)}
            edge="end"
            onMouseDown={(event) => event.preventDefault()}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  )
}
