import React from 'react'
import Image from 'next/image'
import Tooltip from '../utils/Tooltip'
import Link from 'next/link'

const ProjectCard: React.FC<Project> = ({
  projectName,
  projectLink,
  imageSrc,
  altText,
  description,
  comments,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  learnings,
  future,
  technologies,
  githubLink,
  photos,
  videoSrc,
}) => {
  const techStack = technologies || []
  const features = [feature1, feature2, feature3, feature4, feature5].filter(
    Boolean
  )

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
      <h3 className="text-2xl font-semibold mb-2">About:</h3>
      <p className="mb-4 leading-relaxed text-gray-300">{description}</p>
      <p className="mb-4 leading-relaxed text-gray-300">{comments}</p>
      {features.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-2">Features:</h3>
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                className="mb-2 pl-4 md:ml-4 ml-2 leading-relaxed text-gray-300 list-disc"
              >
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
      <h3 className="text-2xl font-semibold mb-2">Learnings:</h3>
      <p className="mb-4 leading-relaxed text-gray-300">{learnings}</p>
      {videoSrc ? (
        <div className="mt-5 mb-5">
          <h3 className="text-2xl font-semibold mb-2 mt-3">watch demo</h3>
          <video width="800" height="400" controls className="rounded-lg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        photos &&
        photos.length > 0 && (
          <div className="flex flex-wrap mt-5 mb-5">
            {photos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={projectName}
                width={400}
                height={200}
                className="rounded-lg m-2"
              />
            ))}
          </div>
        )
      )}
      <h3 className="text-2xl font-semibold mb-2 mt-3">Future plans:</h3>
      <p className="mb-4 leading-relaxed text-gray-300">{future}</p>

      <h3 className="text-2xl font-semibold mb-3 mt-3">Tech Used:</h3>
      <ul className="flex flex-wrap mb-4">
        {techStack.map((tech, index) => (
          <li key={index} className="bg-gray-700 rounded px-4 py-2 m-1 text-sm">
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex justify-end text-center  items-center pt-5">
        <Tooltip text="Back to Projects">
          <Link href="/#projects-section">
            <Image
              src="/icons/back-arrow.png"
              alt="back to projects"
              width={50}
              height={50}
              className=" mr-4 transform hover:scale-125"
            />
          </Link>
        </Tooltip>
        {projectLink && (
          <Tooltip text="Go to demo site">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/web.png"
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
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/github-logo.png"
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
