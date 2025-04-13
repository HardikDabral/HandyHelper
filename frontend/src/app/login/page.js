'use client'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useRouter } from 'next/navigation'
import { LogIn, UserPlus } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = isLogin 
      ? await login(email, password)
      : await signup(name, email, password)

    if (result.success) {
      router.push('/')
    } else {
      setError(result.error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E3E9] via-[#93B1B5] to-[#4F7C82] md:pl-64">
      <div className="max-w-2xl mx-auto p-6 pt-16 lg:ml-[-20px]">
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-8 shadow-md border border-[#93B1B5]/40">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                isLogin 
                  ? 'bg-[#0B2E33] text-white' 
                  : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
              }`}
            >
              <LogIn className="w-5 h-5" />
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                !isLogin 
                  ? 'bg-[#0B2E33] text-white' 
                  : 'bg-white/30 text-[#0B2E33] hover:bg-white/40'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              Sign Up
            </button>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#0B2E33] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  required={!isLogin}
                />
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B2E33] mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#0B2E33] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}