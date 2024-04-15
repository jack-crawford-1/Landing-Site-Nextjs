'use client'

import React, { useState } from 'react'
import AboutText from './components/aboutText/AboutText'
import MainImage from './components/MainImage'
import Contact from './components/Contact'
import Toggle from './components/Toggle'

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('')

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white ${backgroundColor}`}
    >
      <span className="absolute top-0 right-0 mt-4 mr-4">
        <Toggle setBackgroundColor={setBackgroundColor} />
      </span>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-7xl lg:flex font-extrabold ">
        <AboutText />
        <MainImage />
      </div>
      <Contact />
    </main>
  )
}

export default Home
