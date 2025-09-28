'use client'
import { useState } from 'react'
import { GraduationCap, Plus, Trash2 } from 'lucide-react'

export default function GPACalculator() {
  const [courses, setCourses] = useState([{ id: Date.now(), name: '', percentage: '' }])
  const [gradingSystem, setGradingSystem] = useState('percentage')

  const gradingSystems = {
    'percentage': {
      name: 'Percentage',
      calculate: (percentages) => {
        const validGrades = percentages.filter(p => p !== '')
        if (validGrades.length === 0) return { value: 0, description: '' }
        
        const sum = validGrades.reduce((total, p) => total + parseFloat(p), 0)
        const average = sum / validGrades.length
        return {
          value: average.toFixed(2),
          description: `${average.toFixed(2)}%`
        }
      }
    },
    'cgpa': {
      name: 'CGPA (10-point)',
      calculate: (percentages) => {
        const validGrades = percentages.filter(p => p !== '')
        if (validGrades.length === 0) return { value: 0, description: '' }
        
        // Convert percentages to CGPA (10-point scale)
        const cgpas = validGrades.map(p => {
          const percent = parseFloat(p)
          if (percent >= 90) return 10
          if (percent >= 80) return 9
          if (percent >= 70) return 8
          if (percent >= 60) return 7
          if (percent >= 50) return 6
          if (percent >= 40) return 5
          return 0
        })
        
        const sum = cgpas.reduce((total, cgpa) => total + cgpa, 0)
        const average = sum / cgpas.length
        return {
          value: average.toFixed(2),
          description: average.toFixed(2)
        }
      }
    },
    'percentageTo4': {
      name: 'Percentage to 4.0 GPA',
      calculate: (percentages) => {
        const validGrades = percentages.filter(p => p !== '')
        if (validGrades.length === 0) return { value: 0, description: '' }
        
        // Convert percentages to 4.0 scale (approximate conversion)
        const gpas = validGrades.map(p => {
          const percent = parseFloat(p)
          if (percent >= 85) return 4.0
          if (percent >= 80) return 3.7
          if (percent >= 75) return 3.3
          if (percent >= 70) return 3.0
          if (percent >= 65) return 2.7
          if (percent >= 60) return 2.3
          if (percent >= 55) return 2.0
          if (percent >= 50) return 1.7
          if (percent >= 45) return 1.3
          if (percent >= 40) return 1.0
          return 0.0
        })
        
        const sum = gpas.reduce((total, gpa) => total + gpa, 0)
        const average = sum / gpas.length
        return {
          value: average.toFixed(2),
          description: average.toFixed(2)
        }
      }
    }
  }

  const addCourse = () => {
    setCourses([...courses, { id: Date.now(), name: '', percentage: '' }])
  }

  const removeCourse = (id) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id))
    }
  }

  const updateCourse = (id, field, value) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ))
  }

  const calculateResult = () => {
    const percentages = courses.map(course => course.percentage)
    return gradingSystems[gradingSystem].calculate(percentages)
  }

  const result = calculateResult()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E3E9] via-[#93B1B5] to-[#4F7C82] flex justify-center">
  <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Grade Calculator</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Calculate your academic performance</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0B2E33] mb-2">Grading System</label>
              <select
                value={gradingSystem}
                onChange={(e) => setGradingSystem(e.target.value)}
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              >
                {Object.keys(gradingSystems).map(system => (
                  <option key={system} value={system}>{gradingSystems[system].name}</option>
                ))}
              </select>
            </div>

            {courses.map((course, index) => (
              <div key={course.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    placeholder="Subject Name"
                    className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={course.percentage}
                    onChange={(e) => updateCourse(course.id, 'percentage', e.target.value)}
                    placeholder="Percentage"
                    min="0"
                    max="100"
                    step="0.01"
                    className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                  />
                  {courses.length > 1 && (
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0B2E33]/60 hover:text-[#0B2E33]"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              onClick={addCourse}
              className="w-full p-3 border-2 border-dashed border-[#93B1B5]/40 rounded-lg text-[#0B2E33]/70 hover:text-[#0B2E33] hover:border-[#0B2E33]/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Subject
            </button>

            <div className="mt-8 p-4 bg-[#B8E3E9]/20 rounded-lg border border-[#93B1B5]/30">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-medium text-[#0B2E33]">Your {gradingSystems[gradingSystem].name}</span>
                  <p className="text-sm text-[#0B2E33]/70">{courses.filter(c => c.percentage !== '').length} subjects calculated</p>
                </div>
                <span className="text-2xl font-bold text-[#0B2E33]">{result.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}