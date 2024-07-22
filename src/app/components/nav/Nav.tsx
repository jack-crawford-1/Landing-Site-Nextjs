import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AnimateNav from './AnimateNav'

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
      className={`bg-slate-800 z-50 w-full h-fit sticky duration-700 transition-all ${
        visible ? 'top-0' : '-top-60'
      } `}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center content-center justify-between p-3">
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <div className="">
            <AnimateNav />
          </div>
        </a>

        <ul className="flex rounded-lg p-4 font-medium md:mt-0 flex-row md:space-x-8 md:p-0 rtl:space-x-reverse text-white">
          {currentPath !== '/projects' && (
            <Link href="/#projects-section">
              <li className="p-2 hover:text-pink-600 hover:scale-125 transform duration-200 ease-in-out">
                Projects
              </li>
            </Link>
          )}
          {currentPath !== '/about' && (
            <Link href="/#experience-section">
              <li className="p-2 hover:text-pink-600 scale-110 hover:scale-125 transform duration-200 ease-in-out">
                About
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  )
}
