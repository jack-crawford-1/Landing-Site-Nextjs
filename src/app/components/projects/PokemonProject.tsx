'use client'

import Image from 'next/image'

function PokemonProject() {
  return (
    <div className="container mx-auto p-6 bg-gray-800 min-w-3/4 md:w-2/5 md:rounded-lg border-4 md:m-5">
      <div className="flex flex-row justify-between items-center  w-fit">
        <div className="m-0 mr-2">
          <h2 className="text-2xl text-white m-2 hover:scale-110 hover:duration-500 ease-in-out">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pokedex-api-sage.vercel.app/"
              className="transition duration-300 ease-in-out"
            >
              <button className="text-white  hover:text-green-400 px-4 py-2 rounded transform hover:scale-110 inline-flex">
                Pokemon API
              </button>
            </a>
          </h2>
          <div className="hover:scale-110 transform hover:duration-700 ease-in-out mb-5 rounded">
            <Image
              src="/pokemon-project.png"
              alt="Pokemon Project"
              width={250}
              height={0}
              className="h-fit"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-white m-2">
            This app allows users to view detailed information on their favorite
            Pokemon. Using React Router and the Pokemon API.
          </p>
        </div>
      </div>
      <div className="">
        <ul className="text-sm flex flex-row text-green-500">
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center hover:scale-110 transform hover:duration-700 ease-in-out">
            React
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center hover:scale-110 transform hover:duration-700 ease-in-out">
            Express
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center hover:scale-110 transform hover:duration-700 ease-in-out">
            Knex
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center hover:scale-110 transform hover:duration-700 ease-in-out">
            TypeScript
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6  md:w-fit w-full content-center justify-center  hover:scale-110 transform hover:duration-700 ease-in-out">
            Rest API
          </li>
          <a
            href="https://github.com/jack-crawford-1/Pokedex"
            target="_blank"
            className=" m-1  hover:text-white p-3 max-h-6 content-center justify-center hover:scale-110 transform hover:duration-700 ease-in-out"
          >
            <Image src="/github-logo.png" alt="github" width={30} height={30} />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default PokemonProject
