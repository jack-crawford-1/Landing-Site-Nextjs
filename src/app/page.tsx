'use client'

import HeroText from './components/MainText/HeroText'
import LinksContainer from './components/Links/LinksContainer'
import './globals.css'

function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-10 bg-black text-white `}
    >
      <div className="w-full max-w-4xl items-center justify-between text-7xl md:text-9xl lg:flex font-extrabold pl-10">
        <HeroText />
      </div>
      <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
        <LinksContainer />
      </div>
    </main>
  )
}

export default Home
