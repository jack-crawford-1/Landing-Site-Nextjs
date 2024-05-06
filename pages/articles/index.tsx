'use client'

import '../../src/app/globals.css'
import ArticlesCard from '../articles/articlesData/articlesCard'
import { articlesData } from '../articles/articlesData/articlesData'
import HeaderArea from '@/app/components/MainText/HeaderArea'
import ProjectsLinksContainer from '@/app/components/Links/ProjectsLinksContainer'

function ArticlesHome() {
  return (
    <>
      <div className="bg-black md:border-4 border-white font-inter h-screen">
        <h1 className="text-5xl text-center p-10 text-white">Blogs</h1>
        <div className="md:flex md:flex-row md:flex-wrap md:justify-center bg-black">
          <ArticlesCard {...articlesData.ComparingAPIS} />
          <ArticlesCard {...articlesData.ReactState} />
          <ArticlesCard {...articlesData.NextJS} />
          <ArticlesCard {...articlesData.TailWind} />
        </div>
        <div className=" w-full max-w-5xl items-center md:ml-10 md:pl-10 font-bold">
          <ProjectsLinksContainer />
        </div>
      </div>
    </>
  )
}

export default ArticlesHome
