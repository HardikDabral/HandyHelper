import React from 'react'
import Herosection from '@/components/landing-page/Herosection'
import FloatingNavbar from '@/components/landing-page/FloatingNavbar'
import  AboutUs from "@/components/landing-page/AboutUs"
import WhyChoose from '@/components/landing-page/WhyChoose'
import WhatWeOffer from '@/components/landing-page/WhatWeOffer'

export const metadata = {
  title: 'Free Online Calculators & Tools - Handy Helper',
  description: 'Discover powerful free calculators and tools: BMI calculator, EMI calculator, age calculator, percentage calculator, QR generator, language translator, and 30+ more utility tools. Fast, accurate, and completely free.',
  keywords: [
    'free online calculators',
    'BMI calculator',
    'EMI calculator',
    'age calculator',
    'percentage calculator',
    'QR code generator',
    'language translator',
    'meme generator',
    'countdown timer',
    'utility tools',
    'online tools',
    'free calculators',
    'handy helper tools',
    'calculator tools',
    'productivity tools'
  ],
  openGraph: {
    title: 'Free Online Calculators & Tools - Handy Helper',
    description: 'Discover powerful free calculators and tools: BMI calculator, EMI calculator, age calculator, and 30+ more utility tools.',
    type: 'website',
  },
}

const page = () => {
  return (
    <div>
      <FloatingNavbar />
      <Herosection />
      <AboutUs />
      <WhyChoose />
      <WhatWeOffer />
    </div>
  )
}

export default page