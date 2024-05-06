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
    <div
      className="container mx-auto p-10 pt-2 bg-gray-800 min-w-3/4 md:w-2/5 md:rounded-lg md:border-4 border-0 border-l-0 border-r-0 md:m-5 "
      style={{ boxShadow: '0 10px 15px rgba(0, 0, 0.0, 0.9)' }}
    >
      <div className="flex flex-col justify-between items-center w-fit">
        <div className="m-0 flex flex-row p-0">
          <h2 className="text-4xl text-white m-2 hover:scale-110 hover:duration-500 ease-in-out content-center">
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
          <div className="md:hover:scale-110 transform md:hover:duration-200 ease-in-out md:mb-5 mb-2 rounded pt-5">
            <Image
              src={imageSrc}
              alt={altText}
              width={350}
              height={0}
              className="h-fit"
            />
          </div>
        </div>
        <div className="flex-1 m-2">
          <p className="text-md text-gray-200 m-2 leading-6">{description}</p>
        </div>
      </div>
      <ul className="text-sm flex flex-row text-green-500 flex-wrap">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="border-2 m-1 rounded-xl md:hover:text-white p-3 max-h-10 content-center justify-center md:hover:scale-110 transform hover:duration-200 ease-in-out whitespace-nowrap"
          >
            {tech}
          </li>
        ))}
        <a
          href={githubLink}
          target="_blank"
          className=" m-1 hover:text-white p-0 content-center justify-center hover:scale-150 transform hover:duration-700 ease-in-out w-max min-w-max "
        >
          <Image src="/github-logo.png" alt="github" width={30} height={30} />
        </a>
      </ul>
    </div>
  )
}

export default ProjectCard
