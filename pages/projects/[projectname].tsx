import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import ProjectCard from '@/app/components/projects/ProjectCard'
import { projectsData } from '@/app/components/projects/ProjectsData'
import ProjectsLinksContainer from '@/app/components/projects/ProjectsLinksContainer'

interface Project {
  projectName: string
  projectLink: string
  imageSrc: string
  altText: string
  description: string
  technologies: string[]
  githubLink: string
}

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
    <div className="p-4 bg-slate-800 flex justify-center items-center min-h-screen">
      <div className="max-w-4xl w-full">
        <ProjectCard
          projectName={project.projectName}
          projectLink={project.projectLink}
          imageSrc={project.imageSrc}
          altText={project.altText}
          description={project.description}
          technologies={project.technologies}
          githubLink={project.githubLink}
        />
        <ProjectsLinksContainer />
      </div>
    </div>
  )
}

export default ProjectPage
