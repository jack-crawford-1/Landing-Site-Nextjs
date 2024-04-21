'use client'

import React, { useState } from 'react'

import AboutText from './components/aboutText/AboutText'
import Contact from './components/Contact'
import Toggle from './components/Toggle'
import Showcase from './components/showcase/Showcase'

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('')

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-10 bg-black text-white ${backgroundColor}`}
    >
      <div className="z-10 w-full max-w-4xl items-center justify-between text-5xl md:text-7xl lg:flex font-extrabold ">
        <AboutText />
      </div>
      <div className="w-full max-w-5xl items-center justify-between lg:flex font-extrabold "></div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-7xl lg:flex font-extrabold ">
        <Contact />
      </div>
    </main>
  )
}

export default Home
