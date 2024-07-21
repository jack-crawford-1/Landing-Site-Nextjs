'use client'

import './globals.css'
import HeroText from './components/MainText/HeroText'
import Projects from '../../pages/projects'
import ProjectsLinksContainer from './components/projects/ProjectsLinksContainer'
import About from '../../pages/about'
import AboutSnippet from './components/about/AboutSnippet'

function Home() {
  return (
    <main
      className={`flex min-h-fit flex-col items-center justify-center p-10 bg-slate-800 text-white `}
    >
      <div className="max-w-5xl md:min-h-[600px] min-h-[200px] items-center justify-between text-7xl pl-10 md:text-8xl lg:flex font-extrabold pr-10 ">
        <HeroText />
      </div>
      <ProjectsLinksContainer />
      <div id="about-section">
        <AboutSnippet />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="experience-section">
        <About />
      </div>

      <div>
        <ProjectsLinksContainer />
      </div>
    </main>
  )
}

export default Home
