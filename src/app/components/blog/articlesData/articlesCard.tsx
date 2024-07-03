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
    <div className="container mx-auto pt-2 bg-blue-200 text-blue-900 font-bold md:w-3/5 md:rounded-lg md:border-4 border-2 border-white">
      <div className="flex flex-col justify-center items-center content-center ">
        <div className="m-0">
          <h2 className="text-2xl font-extrabold m-2 hover:scale-110 hover:duration-500 ease-in-out">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={projectLink}
              className="transition duration-300 ease-in-out"
            >
              <button className=" hover:text-blue-400 px-4 py-2 rounded transform hover:scale-110 inline-flex">
                {projectName} ➾
              </button>
            </a>
          </h2>
        </div>
        <div className="flex flex-row justify-center content-center min-h-[150px] max-h-[150px]] p-5 ">
          <p className="text-sm leading-6 p-3 w-2/3">{description}</p>

          <div className="md:hover:scale-110 transform md:hover:duration-200 ease-in-out rounded pl-5">
            <Image
              src={imageSrc}
              alt={altText}
              width={75}
              height={75}
              className="h-fit"
            />
          </div>
        </div>
        <p className="text-sm text-blue-900 m-2 ">{date}</p>
      </div>
    </div>
  )
}

export default ArticlesCard
