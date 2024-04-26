'use client'

import HeroText from './components/MainText/HeroText'
import LinksContainer from './components/Links/LinksContainer'
import ProjectsList from './components/projects/ProjectsList'
import './globals.css'

function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-10 bg-black text-white `}
    >
      <div className="w-full max-w-4xl items-center justify-between text-5xl md:text-7xl lg:flex font-extrabold ">
        <HeroText />
      </div>
      <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 pl-10 font-bold">
        <ProjectsList />
      </div>
      <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
        <LinksContainer />
      </div>
    </main>
  )
}

export default Home
