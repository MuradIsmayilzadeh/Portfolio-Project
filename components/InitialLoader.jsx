'use client'

import { useEffect, useState } from 'react'

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="initial-loader">
      <div className="loader-content">
        <div className="neon-text">Portfolio</div>
        <div className="loader-bar">
          <div className="loader-progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-percentage">{progress}%</div>
      </div>
    </div>
  )
}
