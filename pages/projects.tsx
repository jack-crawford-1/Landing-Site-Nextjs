'use client'

import '../src/app/globals.css'
import CommunityGarden from '../src/app/components/projects/CommunityGarden'
import Weather from '@/app/components/projects/Weather'
import PokemonProject from '@/app/components/projects/PokemonProject'
import TodoProject from '@/app/components/projects/TodoProject'
import NasaProject from '@/app/components/projects/NasaProject'
import HeaderArea from '@/app/components/MainText/HeaderArea'
import LinksContainer from '@/app/components/Links/LinksContainer'
import Link from 'next/link'

function Projects() {
  return (
    <>
      <div className="bg-black border-4 border-white">
        <div className="mb-1 content-center">
          <HeaderArea />
        </div>
        <div className="md:flex md:flex-row md:flex-wrap md:justify-center bg-black">
          <CommunityGarden />
          <Weather />
          <PokemonProject />
          <TodoProject />
          <NasaProject />
        </div>
        <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
          <LinksContainer />
        </div>
      </div>
    </>
  )
}

export default Projects
