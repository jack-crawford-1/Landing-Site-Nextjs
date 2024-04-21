import React from 'react'

const Showcase = () => {
  return (
    <div className="text-sm mb-10">
      <div className="inline-flex space-x-4 md:space-x-8 lg:space-x-12 m-2 text-xl">
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nasa.pushed.nz/"
          className="transition duration-300 ease-in-out"
        >
          <button className="text-white px-4 py-2 rounded transform hover:scale-110">
            NASA
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
      </div>
    </div>
  )
}

export default Showcase
