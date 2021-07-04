import { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'

import { SnackbarCloseButton } from './components'
import { getTheme } from './theme'
import { BaseLayout } from './layout'
import { Routes } from './Routes'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const onToggleTheme = () => {
    setDarkMode((oldValue) => !oldValue)
  }

  const theme = getTheme(darkMode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={2000}
          action={(key) => <SnackbarCloseButton key={key} />}
        >
          <BaseLayout onToggleTheme={onToggleTheme}>
            <Routes />
          </BaseLayout>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
