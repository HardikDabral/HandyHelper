'use client'
import { useState, useEffect } from 'react'
import { Clock, Play, Pause, RotateCw } from 'lucide-react'

export default function CountdownTimer() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isRunning) {
      const notification = new Audio('/notification.mp3')
      notification.play()
      setIsRunning(false)
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const startTimer = () => {
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds)
      setIsRunning(true)
    }
  }

  const pauseTimer = () => setIsRunning(false)
  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(0)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    return {
      hours: String(hrs).padStart(2, '0'),
      minutes: String(mins).padStart(2, '0'),
      seconds: String(secs).padStart(2, '0')
    }
  }

  const formattedTimeLeft = formatTime(timeLeft)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E3E9] via-[#93B1B5] to-[#4F7C82] md:pl-64">
      <div className="max-w-2xl mx-auto p-6 pt-16 lg:ml-[-20px]">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Clock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Countdown Timer</h1>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          {!isRunning && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[['Hours', hours, setHours, 23], ['Minutes', minutes, setMinutes, 59], ['Seconds', seconds, setSeconds, 59]].map(([label, value, setter, max], index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-[#0B2E33] mb-2">{label}</label>
                  <input
                    type="number"
                    min="0"
                    max={max}
                    value={value}
                    onChange={(e) => setter(parseInt(e.target.value) || 0)}
                    className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mb-8">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold font-mono text-[#0B2E33]">
              {formattedTimeLeft.hours}:{formattedTimeLeft.minutes}:{formattedTimeLeft.seconds}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {!isRunning ? (
              <button onClick={startTimer} className="flex-1 bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" /> Start
              </button>
            ) : (
              <button onClick={pauseTimer} className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Pause className="w-4 h-4" /> Pause
              </button>
            )}
            <button onClick={resetTimer} className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2">
              <RotateCw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
