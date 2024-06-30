import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tooltip from '../utils/Tooltip'

interface ProjectCardProps {
  projectName: string
  projectLink: string
  imageSrc: string
  altText: string
  description: string
  technologies: string[]
  githubLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectLink,
  imageSrc,
  altText,
  description,
  technologies,
  githubLink,
}) => {
  const techStack = technologies || []
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{projectName}</h2>
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt={altText}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
      <p className="mb-4">{description}</p>
      <h3 className="text-2xl font-semibold mb-2">Tech Used:</h3>
      <ul className="flex flex-wrap mb-4">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="bg-gray-700 rounded-full px-4 py-2 m-1 text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex justify-end text-center  items-center pt-5">
        {projectLink && (
          <Tooltip text="Go to demo site">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/appIcon.png"
                alt="deployed site"
                width={50}
                height={50}
                className=" mr-4 transform hover:scale-125"
              />
            </a>
          </Tooltip>
        )}
        {githubLink && (
          <Tooltip text="View code">
            <a
              href="https://github.com/jack-crawford-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-logo.png"
                alt="github"
                width={50}
                height={50}
                className=" mr-4 transform hover:scale-125"
              />
            </a>
          </Tooltip>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
