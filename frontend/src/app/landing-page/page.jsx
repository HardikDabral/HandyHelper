import React from 'react'
import Herosection from '@/components/landing-page/Herosection'
import FloatingNavbar from '@/components/landing-page/FloatingNavbar'
import  AboutUs from "@/components/landing-page/AboutUs"
import WhyChoose from '@/components/landing-page/WhyChoose'
import WhatWeOffer from '@/components/landing-page/WhatWeOffer'
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