'use client'

import { useEffect, useState } from 'react'

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {

    // Animate progress over 3.5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + (100 / 70)
      })
    }, 50)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!mounted || !isLoading) return null

  return (
    <div className="initial-loader">
      <div className="loader-content">
        <div className="neon-text">Game Developer</div>
        <div className="circle-loader">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
        <div className="loader-percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
