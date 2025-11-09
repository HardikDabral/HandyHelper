'use client'
import React from 'react'
import HeroBg from "../../../public/images/three.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Herosection = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const target = document.getElementById('what-we-offer')
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div className="relative max-w-[1440px] mx-auto h-[600px] md:h-[600px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration:10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src={HeroBg}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-8 pb-16">
        <div className="flex items-start">
          {/* Left Content */}
          <div className="text-white max-w-4xl">
  
            <h1 className="text-5xl lg:text-7xl font-medium leading-tight mb-8">
              <span className="block">Free Online Calculators</span>
              <span className="block">& Tools - Handy Helper</span>
            </h1>

            <div className="space-y-6">
              <p className="text-lg max-w-3xl font-normal text-gray-300 leading-relaxed">
                Whether you're managing teams, crunching data, or scaling operations, we've got the intuitive features to elevate your game. Join thousands who've already streamlined their success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block text-center">
                  Get Started Free
                </Link>
                <Link href="#what-we-offer" onClick={handleSmoothScroll} className="border-2 border-white/50 hover:border-white text-white px-8 py-3 rounded-full font-medium transition-colors inline-block text-center">
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection