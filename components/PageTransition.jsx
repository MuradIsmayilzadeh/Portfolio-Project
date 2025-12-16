'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const routeOrder = {
  '/': 0,
  '/about': 1,
  '/projects': 2,
  '/contact': 3,
}

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [prevChildren, setPrevChildren] = useState(null)
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [direction, setDirection] = useState('right')

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false)
      }, 2000)
      return () => clearTimeout(timer)
    }

    if (pathname !== prevPathname && !isInitialLoad) {
      const currentIndex = routeOrder[pathname] ?? 0
      const prevIndex = routeOrder[prevPathname] ?? 0
      const newDirection = currentIndex > prevIndex ? 'right' : 'left'
      setDirection(newDirection)
      
      setPrevChildren(displayChildren)
      setIsTransitioning(true)
      
      const switchTimer = setTimeout(() => {
        setDisplayChildren(children)
        setPrevPathname(pathname)
      }, 200)

      const completeTimer = setTimeout(() => {
        setIsTransitioning(false)
        setPrevChildren(null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 500)

      return () => {
        clearTimeout(switchTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [pathname, children, isInitialLoad, prevPathname])

  if (isInitialLoad) {
    return (
      <div className="page-transition initial-load">
        {displayChildren}
      </div>
    )
  }

  if (isTransitioning && prevChildren) {
    return (
      <div className="page-transition-wrapper">
        <div className={`page-transition exiting exiting-${direction}`}>
          {prevChildren}
        </div>
        <div className={`page-transition entering entering-${direction}`}>
          {displayChildren}
        </div>
      </div>
    )
  }

  return (
    <div className="page-transition loaded">
      {displayChildren}
    </div>
  )
}
