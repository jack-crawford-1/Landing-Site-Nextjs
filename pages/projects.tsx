// 'use client'

// import '../src/app/globals.css'
// import CommunityGarden from '../src/app/components/projects/CommunityGarden'
// import Weather from '@/app/components/projects/Weather'
// import PokemonProject from '@/app/components/projects/PokemonProject'
// import TodoProject from '@/app/components/projects/TodoProject'
// import NasaProject from '@/app/components/projects/NasaProject'
// import HeaderArea from '@/app/components/MainText/HeaderArea'
// import LinksContainer from '@/app/components/Links/LinksContainer'
// import Link from 'next/link'
// import TeamGroup from '@/app/components/projects/TeamGroup'

// function Projects() {
//   return (
//     <>
//       <div className="bg-black border-4 border-white">
//         <div className="mb-1 content-center">
//           <HeaderArea />
//         </div>
//         <div className="md:flex md:flex-row md:flex-wrap md:justify-center bg-black">
//           <CommunityGarden />
//           <Weather />
//           <PokemonProject />
//           <TodoProject />
//           <NasaProject />
//           <TeamGroup />
//         </div>
//         <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
//           <LinksContainer />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Projects

'use client'

import '../src/app/globals.css'
import LinksContainer from '@/app/components/Links/LinksContainer'
import ProjectCard from '../src/app/components/projects/ProjectCard'
import { projectsData } from '@/app/components/projects/ProjectsData'
import HeaderArea from '@/app/components/MainText/HeaderArea'

function Pro() {
  return (
    <>
      <div className="bg-black border-4 border-white">
        <HeaderArea />
        <div className="md:flex md:flex-row md:flex-wrap md:justify-center bg-black">
          <ProjectCard {...projectsData.CommunityGarden} />
          <ProjectCard {...projectsData.WeatherAPI} />
          <ProjectCard {...projectsData.TodoApp} />
          <ProjectCard {...projectsData.PokemonAPI} />
          <ProjectCard {...projectsData.NasaAPI} />
          <ProjectCard {...projectsData.GroupProject} />
        </div>
        <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
          <LinksContainer />
        </div>
      </div>
    </>
  )
}

export default Pro
