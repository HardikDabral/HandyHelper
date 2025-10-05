'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ImagePlus, Languages, QrCode, Timer, Palette } from 'lucide-react'

const WhatWeOffer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const calculators = [
    {
      id: 'meme-generator',
      title: 'Meme Generator',
      feature: 'AI-powered memes',
      description: 'Create viral memes with our intelligent meme generator tool.',
      icon: ImagePlus
    },
    {
      id: 'language-translator',
      title: 'Language Translator',
      feature: 'Real-time translation',
      description: 'Translate text between 100+ languages instantly and accurately.',
      icon: Languages
    },
    {
      id: 'qr-generator',
      title: 'QR Code Generator',
      feature: 'Custom QR codes',
      description: 'Generate beautiful QR codes for URLs, text, and contact info.',
      icon: QrCode
    },
    {
      id: 'countdown-timer',
      title: 'Countdown Timer',
      feature: 'Event countdown',
      description: 'Create countdown timers for events, deadlines, and special moments.',
      icon: Timer
    },
    {
      id: 'color-picker',
      title: 'Color Picker',
      feature: 'Advanced color tools',
      description: 'Professional color picker with hex, RGB, and HSL support.',
      icon: Palette
    }
  ]

  return (
    <section id="what-we-offer" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Powerful Calculators & Tools
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Discover our collection of free, powerful calculators designed to simplify your daily tasks.
          </motion.p>

          {/* Feature Tags */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Free Tools</div>
            <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Easy to Use</div>
            <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Instant Results</div>
          </motion.div>
        </motion.div>

        {/* Calculator Boxes */}
        <motion.div 
          className="space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              variants={fadeInUp}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg bg-white text-gray-900 hover:bg-gray-900 hover:text-white rounded-xl md:rounded-full p-6 border border-gray-200 hover:border-gray-300"
            >
              <Link href={`/${calc.id}`} className="block">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    {/* Monochrome Lucide icon on neutral pill */}
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-gray-800 group-hover:border-gray-700">
                      <calc.icon className="w-5 h-5 text-gray-700 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{calc.title}</h3>
                      <p className="text-sm opacity-70">{calc.feature}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center md:space-x-4">
                    <div className="text-left md:text-right">
                      <p className="text-sm opacity-70 md:max-w-md">
                        {calc.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 bg-gray-100 group-hover:bg-white/20 mt-2 md:mt-0">
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Link 
            href="/"
            className="inline-flex md:inline-flex w-full md:w-auto justify-center items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
          >
            <span>View All Tools</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeOffer
