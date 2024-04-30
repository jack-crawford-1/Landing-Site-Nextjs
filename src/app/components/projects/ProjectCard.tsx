import React from 'react'
import Image from 'next/image'

function ProjectCard({
  projectName,
  projectLink,
  imageSrc,
  altText,
  description,
  technologies,
  githubLink,
}: {
  projectName: string
  projectLink: string
  imageSrc: string
  altText: string
  description: string
  technologies: string[]
  githubLink: string
}) {
  const techStack = technologies || []
  return (
    <div className="container mx-auto p-10 pt-2 bg-gray-800 min-w-3/4 md:w-2/5 md:rounded-lg md:border-4 border-2 border-l-0 border-r-0 md:m-5">
      <div className="flex flex-row justify-between items-center  w-fit">
        <div className="m-0 mr-2">
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
          <div className="hover:scale-110 transform hover:duration-200 ease-in-out mb-5 rounded">
            <Image
              src={imageSrc}
              alt={altText}
              width={250}
              height={0}
              className="h-fit"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-white m-2 -mr-5">{description}</p>
        </div>
      </div>
      <ul className="text-sm flex flex-row text-green-500 flex-wrap">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="border-2 m-0.5 rounded hover:text-white p-3 max-h-10 content-center justify-center hover:scale-110 transform hover:duration-200 ease-in-out whitespace-nowrap"
          >
            {tech}
          </li>
        ))}
        <a
          href={githubLink}
          target="_blank"
          className=" m-1 hover:text-white p-0 content-center justify-center hover:scale-110 transform hover:duration-700 ease-in-out w-max min-w-max mr-5"
        >
          <Image src="/github-logo.png" alt="github" width={30} height={30} />
        </a>
      </ul>
    </div>
  )
}

export default ProjectCard
