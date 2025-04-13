'use client'
import { useState } from 'react'
import { Wallet, Calculator, Percent, DollarSign } from 'lucide-react'

export default function SalaryCalculator() {
  const [grossSalary, setGrossSalary] = useState('')
  const [deductions, setDeductions] = useState([
    { name: 'Income Tax', percentage: '', amount: '' },
    { name: 'Professional Tax', percentage: '', amount: '' },
    { name: 'Provident Fund', percentage: '', amount: '' }
  ])
  const [result, setResult] = useState(null)

  const handleDeductionChange = (index, field, value) => {
    const newDeductions = [...deductions]
    newDeductions[index][field] = value
    
    if (field === 'percentage' && value !== '') {
      newDeductions[index].amount = ((parseFloat(value) / 100) * parseFloat(grossSalary)).toFixed(2)
    } else if (field === 'amount' && value !== '') {
      newDeductions[index].percentage = ((parseFloat(value) / parseFloat(grossSalary)) * 100).toFixed(2)
    }
    
    setDeductions(newDeductions)
  }

  const calculateSalary = () => {
    const totalDeductions = deductions.reduce((sum, deduction) => {
      return sum + (deduction.amount ? parseFloat(deduction.amount) : 0)
    }, 0)

    const netSalary = parseFloat(grossSalary) - totalDeductions

    setResult({
      grossSalary: parseFloat(grossSalary).toFixed(2),
      totalDeductions: totalDeductions.toFixed(2),
      netSalary: netSalary.toFixed(2)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E3E9] via-[#93B1B5] to-[#4F7C82] md:pl-64">
      <div className="max-w-2xl mx-auto p-6 pt-16 lg:ml-[-20px]">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <Wallet className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2E33]">Salary Calculator</h1>
        </div>
        
        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#0B2E33] mb-2 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Gross Salary
              </label>
              <input
                type="number"
                value={grossSalary}
                onChange={(e) => setGrossSalary(e.target.value)}
                placeholder="Enter gross salary"
                className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[#0B2E33]">Deductions</h2>
              {deductions.map((deduction, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                      {deduction.name} (%)
                    </label>
                    <input
                      type="number"
                      value={deduction.percentage}
                      onChange={(e) => handleDeductionChange(index, 'percentage', e.target.value)}
                      placeholder="Enter percentage"
                      className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0B2E33] mb-2">
                      Amount
                    </label>
                    <input
                      type="number"
                      value={deduction.amount}
                      onChange={(e) => handleDeductionChange(index, 'amount', e.target.value)}
                      placeholder="Enter amount"
                      className="w-full p-3 border border-[#93B1B5]/40 rounded-lg bg-white/50 backdrop-blur-xl text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={calculateSalary}
            className="w-full bg-[#0B2E33] text-white py-3 rounded-lg hover:bg-[#4F7C82] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            Calculate Salary
          </button>

          {result && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">₹{result.grossSalary}</div>
                <div className="text-sm text-[#0B2E33]/70">Gross Salary</div>
              </div>
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">₹{result.totalDeductions}</div>
                <div className="text-sm text-[#0B2E33]/70">Total Deductions</div>
              </div>
              <div className="bg-[#B8E3E9]/20 p-4 rounded-lg border border-[#93B1B5]/30">
                <div className="text-2xl font-bold text-[#0B2E33]">₹{result.netSalary}</div>
                <div className="text-sm text-[#0B2E33]/70">Net Salary</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}