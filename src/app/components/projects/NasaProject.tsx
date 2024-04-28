'use client'

import Image from 'next/image'

function NasaProject() {
  return (
    <div className="container mx-auto p-6 bg-gray-800 min-w-3/4 md:w-1/3 md:rounded-lg border-4 md:m-5">
      {' '}
      <div className="flex flex-row justify-between items-center rounded-lg  w-fit">
        <div className="flex-none m-1 mr-2 hover:scale-110 hover:duration-500">
          <Image
            src="/nasa-project.png"
            alt="Community Garden Project"
            width={150}
            height={150}
            className="h-fit"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl text-white m-2 hover:scale-110 hover:duration-500 ease-in-out">
            NASA API{' '}
          </h2>
          <p className="text-sm text-white m-2">
            This app allows users to view the Image Of The Day sourced from the
            NASA API with React and TypeScript.
          </p>
        </div>
      </div>
      <div className="">
        <ul className="text-sm flex flex-row text-green-500">
          <li className="border-2 m-1 rounded hover:text-white p-1">React</li>
          <li className="border-2 m-1 rounded hover:text-white p-1">Express</li>
          <li className="border-2 m-1 rounded hover:text-white p-1">Knex</li>
          <li className="border-2 m-1 rounded hover:text-white p-1">
            TypeScript
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-1">
            Rest API
          </li>
          <a
            href="https://github.com/jack-crawford-1/community-garden"
            target="_blank"
            className="m-3"
          >
            <Image src="/github-logo.png" alt="github" width={30} height={30} />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default NasaProject
