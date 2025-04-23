import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'

export const metadata = {
  title: 'Handy Helper Tools',
  description: 'Collection of useful tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
