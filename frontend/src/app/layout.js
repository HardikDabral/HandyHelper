import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'
import { AuthProvider } from '../../context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Handy Helper Tools',
  description: 'A collection of useful tools to help you with everyday tasks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Sidebar />
            <main className="md:ml-64 pt-16">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
