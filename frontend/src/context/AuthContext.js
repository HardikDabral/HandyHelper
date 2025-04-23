'use client'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const API_URL = 'https://handy-helper.vercel.app/api/users'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      
      if (response.ok) {
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
        return { success: true }
      }
      return { success: false, error: data.message }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'Login failed. Please try again.' }
    }
  }

  const signup = async (name, email, password) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify({ name, email, password }),
      })
      const data = await response.json()
      
      if (response.ok) {
        setUser(data)
        localStorage.setItem('user', JSON.stringify(data))
        return { success: true }
      }
      return { success: false, error: data.message }
    } catch (error) {
      console.error('Signup error:', error)
      return { success: false, error: 'Registration failed. Please try again.' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}