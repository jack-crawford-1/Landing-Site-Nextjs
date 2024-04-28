import React from 'react'

const ProjectsList = () => {
  return (
    <div className="md:text-xl text-sm flex flex-col ">
      <span className="text-gray-500">Deployed projects:</span>
      <div className="text-sm mb-10 flex flex-row flex-wrap justify-start">
        {/* <span className="text-gray-500">Deployed projects:</span> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://weather-api.pushed.nz/"
          className="transition duration-300 ease-in-out"
        >
          <button className="text-white px-4 py-2 rounded transform hover:scale-110">
            Weather API
          </button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://community-garden.pushed.nz/"
          className="transition duration-300 ease-in-out"
        >
          <button className="text-white px-4 py-2 rounded transform hover:scale-110">
            Community Garden
          </button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pokedex-api-sage.vercel.app/"
          className="transition duration-300 ease-in-out"
        >
          <button className="text-white px-4 py-2 rounded transform hover:scale-110">
            Pokemon API
          </button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://todo-fullstack.pushed.nz/"
          className="transition duration-300 ease-in-out"
        >
          <button className="text-white px-4 py-2 rounded transform hover:scale-110">
            Todo Fullstack
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProjectsList
