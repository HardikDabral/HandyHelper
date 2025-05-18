'use client'
import { useState } from 'react'
import { Calendar, Calculator } from 'lucide-react'

export default function DayCounter() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [result, setResult] = useState(null)

  const calculateDays = () => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end - start)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    setResult({
      days: diffDays,
      weeks: Math.floor(diffDays / 7),
      months: Math.floor(diffDays / 30.44),
      years: Math.floor(diffDays / 365.25)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E3E9] via-[#93B1B5] to-[#4F7C82] flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Calculator className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Day Counter</h1>
        </div>
        
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>
          </div>

          <button
            onClick={calculateDays}
            className="w-full bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            Calculate Days
          </button>
  
          {result && (
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">{result.days}</div>
                <div className="text-sm text-[#0B2E33]/70">Days</div>
              </div>
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">{result.weeks}</div>
                <div className="text-sm text-[#0B2E33]/70">Weeks</div>
              </div>
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">{result.months}</div>
                <div className="text-sm text-[#0B2E33]/70">Months</div>
              </div>
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">{result.years}</div>
                <div className="text-sm text-[#0B2E33]/70">Years</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}