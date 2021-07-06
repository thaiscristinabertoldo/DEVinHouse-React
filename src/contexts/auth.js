import { createContext, useContext, useState } from 'react'

import * as auth from '../services/auth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useState(() => {
    const storageUser = localStorage.getItem(process.env.REACT_APP_USER)

    if (storageUser) {
      setUser(JSON.parse(storageUser))
    }
  }, [])

  async function login() {
    const response = await auth.login()
    setUser(response.user)
    localStorage.setItem(process.env.REACT_APP_TOKEN, response.token)
    localStorage.setItem(process.env.REACT_APP_USER, JSON.stringify(response.user))
  }

  async function logout() {
    setUser(null)
    localStorage.clear()
  }

  return <AuthContext.Provider value={{ signed: !!user, user, login, logout }}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve estar envolvido pelo AuthProvider.')
  }

  return context
}

export { AuthProvider, useAuth }
