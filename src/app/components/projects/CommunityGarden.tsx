'use client'

import Image from 'next/image'

function CommunityGarden() {
  return (
    <div className="container mx-auto p-6 bg-gray-800 min-w-3/4 md:w-1/3 md:rounded-lg border-4 md:m-5">
      {' '}
      <div className="flex flex-row justify-between items-center  w-fit">
        <div className="flex-none m-1 mr-2 hover:scale-110 hover:duration-500">
          <Image
            src="/cg1.png"
            alt="Community Garden Project"
            width={150}
            height={150}
            className="h-fit"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl text-white m-2 hover:scale-110 hover:duration-500 ease-in-out">
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
          </h2>
          <p className="text-sm text-white m-2">
            The Garden App is a dynamic full-stack application designed to allow
            users to find, share, and manage green spaces, integrating
            geolocation and secure user interactions
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

export default CommunityGarden
