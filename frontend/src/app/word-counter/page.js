'use client'
import { useState, useEffect } from 'react'
import { FileText, Type, Hash, AlignJustify, Clock } from 'lucide-react'

export default function WordCounter() {
  const [text, setText] = useState('')
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpace: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0
  })

  useEffect(() => {
    const calculateStats = () => {
      const characters = text.length
      const charactersNoSpace = text.replace(/\s/g, '').length
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
      const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length
      const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(Boolean).length

      setStats({
        characters,
        charactersNoSpace,
        words,
        sentences,
        paragraphs
      })
    }

    calculateStats()
  }, [text])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8E3E9] via-[#93B1B5] to-[#4F7C82] flex justify-center">
      <div className="max-w-2xl w-full mx-4 sm:mx-auto p-6 pt-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-[#0B2E33] text-white mr-4 animate-bounce">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2E33]">Word Counter</h1>
            <p className="text-sm text-[#0B2E33]/70 mt-1">Count words, characters, and more in your text</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40 mb-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-96 p-4 border border-[#93B1B5]/40 rounded-lg bg-white/50 text-[#0B2E33] focus:outline-none focus:border-[#4F7C82] focus:ring-2 focus:ring-[#4F7C82]/20 resize-none"
          />
        </div>

        <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-xl rounded-xl p-6 shadow-md border border-[#93B1B5]/40">
              <h2 className="text-lg font-semibold text-[#0B2E33] mb-4">Text Statistics</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#B8E3E9]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#0B2E33]">
                    <Type className="w-4 h-4" />
                    <span>Words</span>
                  </div>
                  <span className="font-semibold text-[#0B2E33]">{stats.words}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#B8E3E9]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#0B2E33]">
                    <Hash className="w-4 h-4" />
                    <span>Characters</span>
                  </div>
                  <span className="font-semibold text-[#0B2E33]">{stats.characters}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#B8E3E9]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#0B2E33]">
                    <Hash className="w-4 h-4" />
                    <span>Characters (no spaces)</span>
                  </div>
                  <span className="font-semibold text-[#0B2E33]">{stats.charactersNoSpace}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#B8E3E9]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#0B2E33]">
                    <AlignJustify className="w-4 h-4" />
                    <span>Sentences</span>
                  </div>
                  <span className="font-semibold text-[#0B2E33]">{stats.sentences}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#B8E3E9]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#0B2E33]">
                    <AlignJustify className="w-4 h-4" />
                    <span>Paragraphs</span>
                  </div>
                  <span className="font-semibold text-[#0B2E33]">{stats.paragraphs}</span>
                </div>

                {/* <div className="flex items-center justify-between p-3 bg-[#B8E3E9]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#0B2E33]">
                    <Clock className="w-4 h-4" />
                    <span>Reading Time</span>
                  </div>
                  <span className="font-semibold text-[#0B2E33]">
                    {stats.readingTime} {stats.readingTime === 1 ? 'minute' : 'minutes'}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}