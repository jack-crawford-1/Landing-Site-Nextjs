import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Project from '../Links/Project'
import About from '../Links/About'

export default function Nav() {
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY

    if (currentScrollPosition > lastScrollPosition) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setLastScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  const router = useRouter()
  const currentPath = router.pathname

  return (
    <div
      className={`bg-slate-800 z-100 w-full h-fit sticky duration-1000  transition-all ${
        visible ? 'top-0' : '-top-40'
      } `}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center content-center justify-between p-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="text-6xl font-extrabold lg:pl-48">
            <span style={{ color: '#87CEFA' }}>J</span>
            <span style={{ color: '#FFCC33' }}>a</span>
            <span style={{ color: '#00FF7F' }}>c</span>
            <span style={{ color: '#FFA343' }}>k</span>
          </div>
        </a>

        <style>
          {`
              .gradient-outline {
                color: #1e293b;
                text-shadow: 
                  -1px -1px 0 #eeeee4,  
                  1px -1px 0 #eeeee4,
                  -1px 1px 0 #eeeee4,
                  1px 1px 0 #eeeee4;
              }
              `}
        </style>

        <ul className="mt-4 flex rounded-lg p-4 font-medium md:mt-0 flex-row md:space-x-8 md:p-0 rtl:space-x-reverse text-white">
          {currentPath !== '/projects' && (
            <Link href="/projects">
              <li className="p-2 hover:text-pink-600 hover:scale-110 transform duration-200 ease-in-out">
                <Project />
              </li>
            </Link>
          )}
          {currentPath !== '/about' && (
            <Link href="/about">
              <li className="p-2 hover:text-pink-600 hover:scale-110 transform duration-200 ease-in-out">
                <About />
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  )
}
