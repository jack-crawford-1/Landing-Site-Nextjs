'use client'

import './globals.css'
import HeroText from './components/MainText/HeroText'
import Projects from '../../pages/projects'

import AboutSnippet from './components/about/AboutSnippet'
import HomeLinksContainer from './components/Links/HomeLinksContainer'
import AboutSection from '../../pages/about'

function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center p-10 bg-slate-800 text-white overflow-x-hidden`}
    >
      <div className="max-w-5xl md:min-h-[600px] min-h-[200px] items-center justify-between text-7xl pl-10 md:pl-[150px] md:text-8xl lg:flex font-extrabold  ">
        <HeroText />
      </div>
      <HomeLinksContainer />
      <div id="about-section">
        <AboutSnippet />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="experience-section">
        <AboutSection />
      </div>
      <div id="links-section">
        <HomeLinksContainer />
      </div>
    </main>
  )
}

export default Home
