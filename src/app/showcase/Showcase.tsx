import React from 'react'

const Showcase = () => {
  return (
    <div className="text-sm mb-10">
      <div className="inline-flex space-x-4 md:space-x-8 lg:space-x-12">
        <a
          target="_blank"
          href="https://weather-api.pushed.nz/"
          className="text-white  transition duration-300 ease-in-out"
        >
          <button className="text-white px-4 py-2 rounded hover:bg-blue-600 ">
            Weather API
          </button>
        </a>
        <a
          target="_blank"
          href="https://pokedex-api-sage.vercel.app/"
          className="text-white transition duration-300 ease-in-out"
        >
          <button className=" text-white px-4 py-2 rounded hover:bg-blue-600 ">
            Pokemon API
          </button>
        </a>
        <a
          target="_blank"
          href="https://todo-fullstack.pushed.nz/"
          className="text-white transition duration-300 ease-in-out"
        >
          <button className=" text-white px-4 py-2 rounded hover:bg-blue-600">
            Todo Fullstack
          </button>
        </a>
      </div>
    </div>
  )
}

export default Showcase
