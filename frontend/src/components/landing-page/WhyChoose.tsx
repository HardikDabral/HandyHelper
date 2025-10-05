"use client"
import React from 'react'
import Image from 'next/image'
import BgImage from "../../../public/images/two.jpg"

const WhyChoose = () => {
  return (
    <section className="py-16">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title (outside the card, above entire section) */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-5xl mx-auto font-extrabold">
            <span className="bg-gradient-to-r from-green-800 to-emerald-500 bg-clip-text text-transparent">
              Why Choose Handy Helper
            </span>
          </h2>
        </div>
        {/* Card Container with background */} 
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0">
            <Image src={BgImage} alt="Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left Copy */}
              <div className="flex flex-col justify-between min-h-[260px] lg:min-h-[340px]">
                <div className="flex items-start gap-3 mb-6">
                  {/* <div className="w-3 h-3 rounded-full bg-white/90" /> */}
                  <h2 className="text-2xl lg:text-5xl font-semibold leading-tight">
                    <span className="text-white/70">The platform</span> emerged as
                    <br />
                    a pivotal tool, <span className="text-white/70">optimizing</span>
                    <br />
                    logistics in aviation.
                  </h2>
                </div>
                {/* 20% block pinned to bottom of left column */}
                <div className="mt-8">
                  <div className="text-3xl sm:text-5xl font-bold">20%</div>
                  <p className="mt-4 text-white/85 max-w-md">
                    Platform cuts delays, boosts efficiency.
                  </p>
                  
                  {/* Additional benefit */}
                  <div className="mt-6">
                    <div className="text-3xl sm:text-5xl font-bold">99.9%</div>
                    <p className="mt-2 text-white/85 max-w-md">
                      Uptime guarantee with enterprise-grade reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Reasons to choose us (glassy cards, no decorations) */}
              <div className="relative">
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  {[
                    {
                      title: 'Fast and Accurate',
                      text: 'Lightning-fast tools with precise calculations you can trust every time.'
                    },
                    {
                      title: 'Privacy First',
                      text: 'We don\'t track or store your inputs. No login required, ever.'
                    },
                    {
                      title: 'Free Forever',
                      text: 'All utilities are free to use with no paywalls or hidden limits.'
                    },
                    {
                      title: 'Works Everywhere',
                      text: 'Responsive by design. Optimized for mobile, tablet, and desktop.'
                    },
                    {
                      title: 'Always Improving',
                      text: 'We ship updates frequently and add new tools based on feedback.'
                    },
                    {
                      title: 'Human Support',
                      text: 'Need help or have a request? We respond quickly and actually listen.'
                    }
                  ].map((item, i) => (
                    <div key={i} className="backdrop-blur-md bg-white/15 border border-white/20 rounded-2xl p-5 text-white shadow-lg">
                      <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/85 leading-relaxed text-xs md:text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose