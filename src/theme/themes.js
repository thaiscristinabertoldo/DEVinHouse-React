import { createMuiTheme } from '@material-ui/core'
import { deepPurple, indigo, lightBlue, pink } from '@material-ui/core/colors'

export const getTheme = (darkMode) =>
  createMuiTheme({
    ...(darkMode ? darkTheme : lightTheme),
  })

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: pink,
    secondary: deepPurple,
  },
})

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: lightBlue,
  },
})
