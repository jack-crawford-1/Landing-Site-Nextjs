'use client'
import '../../src/app/globals.css'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import ProjectCard from '@/app/components/projects/ProjectCard'
import { projectsData } from '@/app/components/projects/ProjectsData'
import ProjectsLinksContainer from '@/app/components/projects/ProjectsLinksContainer'
import Nav from '@/app/components/nav/Nav'
import LinksContainer from '@/app/components/Links/LinksContainer'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projectsData).map((projectKey) => ({
    params: { projectname: projectKey },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projectsData[params?.projectname as string]

  return {
    props: {
      project,
    },
  }
}

type ProjectPageProps = InferGetStaticPropsType<typeof getStaticProps>

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      <Nav />
      <div className="p-4 md-pt-10 bg-slate-800 flex justify-center items-center min-h-screen w-full">
        <div className="max-w-4xl w-full">
          <ProjectCard
            projectName={project.projectName}
            projectLink={project.projectLink}
            imageSrc={project.imageSrc}
            altText={project.altText}
            description={project.description}
            comments={project.comments}
            feature1={project.feature1}
            feature2={project.feature2}
            feature3={project.feature3}
            feature4={project.feature4}
            feature5={project.feature5}
            technologies={project.technologies}
            learnings={project.learnings}
            future={project.future}
            githubLink={project.githubLink}
            photos={project.photos}
            videoSrc={project.videoSrc}
          />
          {/* <LinksContainer /> */}
        </div>
      </div>
    </>
  )
}

export default ProjectPage
