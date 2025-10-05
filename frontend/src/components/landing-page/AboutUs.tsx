'use client'
import React from 'react'
import sideImage from "../../../public/images/one.jpg"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Target, Award, Lightbulb, CheckCircle, ArrowRight, Bot, MessageCircle, Mic } from 'lucide-react'

const AboutUs = () => {
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

  return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Cool Heading Section */}
                <motion.div
                    className="text-center mb-12"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                >

                    <motion.h1
                        variants={fadeInUp}
                        className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                    >

                        <span className="block bg-gradient-to-r from-green-800 to-emerald-500 bg-clip-text text-transparent">
                            Powerful Tools, Infinite Possibilities
                        </span>
                    </motion.h1>

                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Laptop Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                         {/* Image Card (from reference) */}
                         <div className="relative w-full h-[250px] md:h-[300px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                            <div className="relative h-full">
                                <Image src={sideImage} alt="Dashboard preview" fill className="object-cover" priority />
                            </div>
                            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                                <button className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-gray-900 font-medium shadow pointer-events-none">
                                    Demo our dashboard.
                                </button>
                                <Link href="/" className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow">
                                    <ArrowRight className="w-5 h-5 text-gray-900" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Features */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                        className="space-y-8"
                    >
                        {/* Features List */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            {[
                                {
                                    number: "01",
                                    title: "AI Revolution",
                                    description: "Access procurement securely with Blockchain, ensuring part authenticity."
                                },
                                {
                                    number: "02",
                                    title: "AI Chatbot JET",
                                    description: "Boost sourcing with AI Chatbot JET on popular messaging platforms."
                                },
                                {
                                    number: "03",
                                    title: "AI Assistance",
                                    description: "Interact efficiently with our system using voice commands."
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="grid md:grid-cols-2 items-start gap-6 pb-6 border-b border-gray-200 last:border-b-0"
                                    variants={fadeInUp}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-semibold text-gray-700">{feature.number}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                         {/* Bottom Section - Paragraph and Green Box */}
                         <motion.div
                             variants={fadeInUp}
                             className="flex flex-col lg:flex-row items-end space-y-4 lg:space-y-0 lg:space-x-8 mt-8"
                         >
                             {/* Left Paragraph */}
                             <div className="flex-1">
                                 <p className="text-lg text-gray-600 leading-relaxed">
                                     Explore a multitude of benefits meticulously tailored to meet the unique needs of buyers.
                                 </p>
                             </div>

                             {/* Right Green Box */}
                             <div className="flex-shrink-0 w-full lg:w-auto">
                                 <div className="bg-green-500 rounded-2xl p-6 lg:p-8 text-white w-full lg:w-64">
                                     <div className="text-center">
                                         <div className="text-5xl lg:text-6xl font-bold mb-2">40%</div>
                                         <div className="text-base lg:text-lg font-medium leading-tight">
                                             JET AI Chatbot slashes response times.
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
  )
}

export default AboutUs