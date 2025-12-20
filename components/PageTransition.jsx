'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function PageTransition({ children }) {
  const pathname = usePathname()

  // Optional: scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page-container">
      {children}
    </div>
  )
}
