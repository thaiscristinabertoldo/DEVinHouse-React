import { BrowserRouter } from 'react-router-dom'

import { SnackbarProvider } from 'notistack'

import { SnackbarCloseButton } from './components'
import { BaseLayout } from './layout'
import { Routes } from './Routes'
import { AuthProvider, CustomThemeProvider } from './contexts'

function App() {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={2000}
          action={(key) => <SnackbarCloseButton key={key} />}
        >
          <AuthProvider>
            <BaseLayout>
              <Routes />
            </BaseLayout>
          </AuthProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  )
}

export default App
