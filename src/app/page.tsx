'use client'

import HeroText from './components/MainText/HeroText'
import LinksContainer from './components/Links/LinksContainer'
import './globals.css'

function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-10 bg-gray-800 text-white w-screen overflow-hidden`}
    >
      <div className="max-w-5xl items-center justify-between text-7xl pl-10 md:text-8xl lg:flex font-extrabold pr-10">
        <HeroText />
      </div>
      <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
        <LinksContainer />
      </div>
    </main>
  )
}

export default Home
