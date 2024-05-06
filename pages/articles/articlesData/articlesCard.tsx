import React from 'react'
import Image from 'next/image'

function ArticlesCard({
  projectName,
  projectLink,
  imageSrc,
  altText,
  description,
  date,
}: {
  projectName: string
  projectLink: string
  imageSrc: string
  altText: string
  description: string
  date: string
}) {
  return (
    <div className="container mx-auto pt-2 bg-gray-800 min-w-3/4 md:w-1/6 md:rounded-lg md:border-4 border-2 border-l-0 border-r-0 md:m-5">
      <div className="flex flex-col justify-center items-center ">
        <div className="m-0">
          <h2 className="text-2xl text-white m-2 hover:scale-110 hover:duration-500 ease-in-out">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projectLink}
              className="transition duration-300 ease-in-out"
            >
              <button className="text-white  hover:text-green-400 px-4 py-2 rounded transform hover:scale-110 inline-flex">
                {projectName} ➾
              </button>
            </a>
          </h2>
        </div>
        <div className="flex-1 m-2">
          <p className="text-sm text-white m-2 ">{description}</p>
        </div>
        <div className="md:hover:scale-110 transform md:hover:duration-200 ease-in-out md:mb-5 mb-2 rounded">
          <Image
            src={imageSrc}
            alt={altText}
            width={125}
            height={0}
            className="h-fit"
          />
        </div>
        <p className="text-sm text-white m-2 ">{date}</p>
      </div>
    </div>
  )
}

export default ArticlesCard
