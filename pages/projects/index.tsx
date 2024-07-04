'use client'
import '../../src/app/globals.css'

import Image from 'next/image'
import ProjectsLinksContainer from '@/app/components/projects/ProjectsLinksContainer'
import Link from 'next/link'
import { projects } from '@/app/components/projects/projectsList'
import Nav from '../../src/app/components/nav/Nav'

export default function Projects() {
  return (
    <div className="bg-slate-800 m-0 pb-[10px]">
      <Nav />
      <div className="flex flex-row flex-wrap justify-center gap-8 p-8">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.route}`} key={index}>
            <div
              key={index}
              className="border-8 border-white w-full sm:w-[400px] md:w-[500px] h-[250px] sm:h-[300px] text-slate-900 flex flex-col rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <div className="h-[150px] sm:h-[200px] md:h-[300px] overflow-hidden bg-white">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-200 flex-grow p-4 flex flex-col justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold m-2 text-slate-800">
                  {project.title}
                </h2>
                <div>
                  <button className="mt-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-600 text-xs">
                    See project
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <ProjectsLinksContainer />
      </div>
    </div>
  )
}
