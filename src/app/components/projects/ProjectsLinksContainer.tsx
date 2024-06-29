import Email from '../Links/Email'
import Github from '../Links/Github'
import CV from '../Links/CV'

function ProjectsLinksContainer() {
  return (
    <div className="flex md:flex-row flex-col items-center m-1 md:p-10 p-5">
      <div className="transform hover:scale-110 duration-200 ease-in-out">
        <Github />
      </div>
      <div className="md:ml-5 transform m-2 hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded  text-xl">
        <Email />
      </div>
      <div className="transform hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded  text-xl">
        <CV />
      </div>
    </div>
  )
}

export default ProjectsLinksContainer
