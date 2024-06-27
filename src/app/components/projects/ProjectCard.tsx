import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <h3 className="text-2xl font-semibold mb-2">Technologies Used:</h3>
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
      <div className="flex justify-between pt-5">
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300 font-extrabold"
          >
            See demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300 font-extrabold"
          >
            View Code
          </a>
        )}

        <a
          href={'../projects'}
          // target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300 font-extrabold"
        >
          Back to Projects
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
