'use client'

import Image from 'next/image'

function ProjectTemplate() {
  return (
    <div className="container mx-auto p-6 bg-gray-800 min-w-3/4 md:w-1/3 rounded-lg border-4 md:m-5">
      {' '}
      <div className="flex flex-row justify-between items-center  w-fit">
        <div className="flex-none m-1 mr-2 hover:scale-110 hover:duration-500">
          <Image
            src="/sun.png"
            alt="Community Garden Project"
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl text-white m-2 hover:scale-110 hover:duration-500 ease-in-out">
            ProjectTemplate
          </h2>
          <p className="text-sm text-white m-2">
            The Garden App is a dynamic full-stack application designed to allow
            users to find, share, and manage green spaces, integrating
            geolocation and secure user interactions
          </p>
          <ul className="text-sm flex flex-row text-green-500">
            <li className="border-2 m-1 rounded hover:text-white hover:bold p-1">
              React
            </li>
            <li className="border-2 m-1 rounded hover:text-white hover:bold p-1">
              Express
            </li>
            <li className="border-2 m-1 rounded hover:text-white hover:bold p-1">
              Knex
            </li>
            <li className="border-2 m-1 rounded hover:text-white hover:bold p-1">
              TypeScript
            </li>
            <li className="border-2 m-1 rounded hover:text-white hover:bold p-1">
              Rest API
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectTemplate
