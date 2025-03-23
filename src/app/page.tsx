'use client';

import './globals.css';
import HeroText from './components/MainText/HeroText';
import Projects from '../../pages/projects';

import AboutSnippet from './components/about/AboutSnippet';
import HomeLinksContainer from './components/Links/HomeLinksContainer';
import AboutSection from '../../pages/about';

function Home() {
  return (
    <main
      className={` overflow-x-hidden flex flex-col items-center justify-center md:p-10 p-3 bg-[#070706] text-white bg-fixed  bg-cover bg-center md:bg-[url(/bg-1.jpg)] bg-black`}
    >
      <div className="md:min-h-screen h-full flex flex-col justify-center ">
        <div className="max-w-5xl  min-h-[200px] mt-10 md:mt-0 items-start md:items-end justify-between md:pl-[150px] md:text-8xl lg:flex font-extrabold  ">
          <HeroText />
        </div>
        <div className="mt-[-70px] md:mt-0">
          <HomeLinksContainer />
        </div>
      </div>
      <div id="about-section">
        <AboutSnippet />
      </div>
      <div id="projects-section">
        <div className="md:mt-[-70px]">
          <Projects />
        </div>
      </div>
      <div id="experience-section">
        <AboutSection />
      </div>
      <div id="links-section">
        <HomeLinksContainer />
      </div>
    </main>
  );
}

export default Home;
