import { useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@material-ui/core'

import { getTheme } from './theme'
import { BaseLayout } from './layout'
import { Routes } from './Routes'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode((oldValue) => !oldValue)
  }

  const theme = getTheme(darkMode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <BaseLayout toggleTheme={toggleTheme}>
          <Routes />
        </BaseLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
