'use client'

import '../../src/app/globals.css'
import ArticlesCard from '../../src/app/components/articlesData/articlesCard'
import { articlesData } from '../../src/app/components/articlesData/articlesData'
import ProjectsLinksContainer from '@/app/components/projects/ProjectsLinksContainer'

function ArticlesHome() {
  return (
    <>
      <div className="bg-slate-800 md:border-4 border-white font-inter flex flex-col justify-center content-center items-center">
        <h1 className="text-5xl text-center p-10 text-white">
          Articles (in progress)
        </h1>
        <div className="bg-slate-800">
          <ArticlesCard {...articlesData.ComparingAPIS} />
          <ArticlesCard {...articlesData.ReactState} />
          <ArticlesCard {...articlesData.NextJS} />
          <ArticlesCard {...articlesData.TailWind} />
        </div>
        <div className=" bg-slate-800 w-full items-center md:pl-10 font-bold">
          <ProjectsLinksContainer />
        </div>
      </div>
    </>
  )
}

export default ArticlesHome
