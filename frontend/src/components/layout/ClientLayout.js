'use client'
import { AuthProvider } from '../../context/AuthContext'  // Fix the import path
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex pt-16">
          <Sidebar />
          <div className="flex-1 md:ml-64"> 
            <div className="w-full"> 
              {children}
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}