'use client'

import '../../src/app/globals.css'
import ProjectCard from '../../src/app/components/projects/ProjectCard'
import { projectsData } from '@/app/components/projects/ProjectsData'
import HeaderArea from '@/app/components/projects/HeaderArea'
import ProjectsLinksContainer from '@/app/components/projects/ProjectsLinksContainer'

function ProjectsPage() {
  return (
    <>
      <div className="bg-gray-800 md:border-4 border-white font-inter">
        <HeaderArea />
        <div className="md:flex md:flex-row md:flex-wrap md:justify-center bg-gray-400">
          <ProjectCard {...projectsData.CommunityGarden} />
          <ProjectCard {...projectsData.GroupProject} />
          <ProjectCard {...projectsData.WeatherAPI} />
          <ProjectCard {...projectsData.TodoApp} />
          <ProjectCard {...projectsData.PokemonAPI} />
          <ProjectCard {...projectsData.NasaAPI} />
        </div>
        <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
          <ProjectsLinksContainer />
        </div>
      </div>
    </>
  )
}

export default ProjectsPage
