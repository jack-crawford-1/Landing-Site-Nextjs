import Email from '../Links/Email'
import Github from '../Links/Github'
import CV from '../Links/CV'

function ProjectsLinksContainer() {
  return (
    <div className="flex flex-col md:flex-row items-center m-1 md:p-10 p-5">
      <div className="transform hover:scale-125 duration-200 ease-in-out m-2 order-3 md:order-1">
        <Github />
      </div>
      <div className="md:ml-5 transform m-2 hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded text-xl order-2">
        <Email />
      </div>
      <div className="transform hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded text-xl m-2 order-1 md:order-2">
        <CV />
      </div>
    </div>
  )
}

export default ProjectsLinksContainer
