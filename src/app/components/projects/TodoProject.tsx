'use client'

import Image from 'next/image'

function TodoProject() {
  return (
    <div className="container mx-auto p-6 bg-gray-800 min-w-3/4 md:w-2/5 md:rounded-lg border-4 md:m-5">
      <div className="flex flex-row justify-between items-center  w-fit">
        <div className="flex-none m-1 mr-2 hover:scale-110 hover:duration-500">
          <div className="hover:scale-110 transform hover:duration-700 ease-in-out mb-5 rounded">
            <h2 className="text-2xl text-white m-2 hover:scale-110 hover:duration-500 ease-in-out">
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
            </h2>
            <div className="hover:scale-110 transform hover:duration-700 ease-in-out mb-5 rounded">
              <Image
                src="/todo-project.png"
                alt="Community Garden Project"
                width={250}
                height={0}
                className="h-fit"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-white m-2">
            The Todo app enables the creation, updating, and tracking of to-do
            items in a full-stack application with database integration.
          </p>
        </div>
      </div>
      <div className="">
        <ul className="text-sm flex flex-row text-green-500">
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center">
            React
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center">
            Express
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center">
            Knex
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6 content-center justify-center">
            TypeScript
          </li>
          <li className="border-2 m-1 rounded hover:text-white p-3 max-h-6  md:w-fit w-full content-center justify-center">
            Rest API
          </li>
          <a
            href="https://github.com/jack-crawford-1/community-garden"
            target="_blank"
            className="m-1 max-h-6 content-center justify-center"
          >
            <Image src="/github-logo.png" alt="github" width={30} height={30} />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default TodoProject
