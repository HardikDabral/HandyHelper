"use client"
import React from 'react'
import Link from 'next/link'
import { Calculator, Menu, X } from 'lucide-react'
import logo from "../../../public/images/tools4.png"
import Image from 'next/image'
import { useState } from 'react'

const FloatingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 md:top-10 z-50 w-fit md:px-10 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
        <div className="flex items-center justify-between px-3 py-2 md:px-6 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg overflow-hidden">
              <Image src={logo} alt="Handy Helper" className="w-full h-full object-contain" />
            </div>
            <span className="text-sm md:text-xl font-bold text-gray-800">Handy Helper</span>
          </Link>

         

          {/* Mobile Menu Button */}
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 text-gray-600" />
            ) : (
              <Menu className="w-4 h-4 text-gray-600" />
            )}
          </button> */}
        </div>

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 px-3 py-3 space-y-3">
            <Link 
              href="/" 
              className="block text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/tools" 
              className="block bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calculator className="w-3 h-3" />
              <span>Tools</span>
            </Link>
          </div>
        )} */}
      </div>
    </nav>
  )
}

export default FloatingNavbar