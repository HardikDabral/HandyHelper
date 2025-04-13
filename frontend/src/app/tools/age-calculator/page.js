'use client'
import { useState } from 'react'
import { Calendar, Calculator, Info } from 'lucide-react'

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(null)

  const calculateAge = () => {
    const birth = new Date(birthDate)
    const today = new Date()
    
    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (months < 0 || (months === 0 && days < 0)) {
      years--
      months += 12
    }

    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, birth.getDate())
      days = Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24))
    }

    setAge({ years, months, days })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E3E9] via-[#93B1B5] to-[#4F7C82] md:pl-64">
      <div className="max-w-2xl mx-auto p-6 pt-16 lg:ml-[-20px]">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Calculator className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Age Calculator</h1>
        </div>
        
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Date of Birth
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
            />
          </div>
          
          <button
            onClick={calculateAge}
            className="w-full bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            Calculate Age
          </button>
    
          {age && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#0B2E33] mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Your Age is:
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <div className="text-2xl font-bold text-[#0B2E33]">{age.years}</div>
                  <div className="text-sm text-[#0B2E33]/70">Years</div>
                </div>
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <div className="text-2xl font-bold text-[#0B2E33]">{age.months}</div>
                  <div className="text-sm text-[#0B2E33]/70">Months</div>
                </div>
                <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                  <div className="text-2xl font-bold text-[#0B2E33]">{age.days}</div>
                  <div className="text-sm text-[#0B2E33]/70">Days</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}