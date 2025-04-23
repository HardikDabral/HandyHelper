'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Wrench, LogIn, LogOut, User } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    console.log('Current user:', user)
  }, [user])

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-2xl z-10">
      <div className="flex justify-between items-center px-4 md:px-6 py-5 md:py-4 border-b border-[#93B1B5]/30">
        <Link href="/" className="flex items-center group">
          <Wrench className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#0B2E33] group-hover:scale-110 transition-transform duration-300" />
          <span className="font-bold text-base md:text-xl text-[#0B2E33]">
            Handy Helper
          </span>
        </Link>
        
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:flex items-center gap-1.5 text-[#0B2E33]">
                <span className="text-sm font-medium">
                  Welcome, {user.name}
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="px-2.5 md:px-4 py-2 md:py-2.5 rounded-lg bg-[#0B2E33] hover:bg-[#4F7C82] text-white transition-all duration-300 flex items-center gap-1.5 md:gap-2"
              >
                <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Logout</span>
              </button>
            </div>
          ) : (
            <Link 
              href="/login"
              className="px-2.5 md:px-4 py-2 md:py-2.5 rounded-lg bg-[#0B2E33] hover:bg-[#4F7C82] text-white transition-all duration-300 flex items-center gap-1.5 md:gap-2"
            >
              <LogIn className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}