'use client'

import '../../src/app/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/app/components/projects/projectsList'

export default function Projects() {
  return (
    <>
      <div className=" p-6 bg-slate-800 pb-20 pt-10">
        <h2 className="text-2xl font-bold text-slate-200 pb-10 md:pl-40">
          Projects
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.route}`} key={index}>
              <div className="border-8 border-white w-full sm:w-[400px] md:w-[500px] h-[350px] text-slate-900 flex flex-col rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
                <div className="h-[200px] bg-white">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-gray-200 flex-grow p-4 flex flex-col justify-between">
                  <h2 className="text-xl sm:text-2xl font-semibold m-2 text-slate-800">
                    {project.title}
                  </h2>
                  <div className="flex justify-center">
                    <button className="mt-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-600 text-xs">
                      See project
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
