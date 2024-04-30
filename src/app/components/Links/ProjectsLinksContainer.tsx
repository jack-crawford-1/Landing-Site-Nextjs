import Email from './Email'
import Github from './Github'
import CV from './CV'
import Link from 'next/link'

function ProjectsLinksContainer() {
  return (
    <div className="flex md:flex-row flex-col items-center m-1">
      <div className="transform hover:scale-110">
        <Github />
      </div>
      <div className="md:ml-5 transform m-2 hover:scale-110 text-white px-2 py-2 rounded hover:border text-x">
        <Email />
      </div>
      <div className="transform hover:scale-110 text-white px-2 py-2 rounded hover:border text-x">
        <CV />
      </div>
      <div className="md:ml-5 transform m-2 hover:scale-110 text-white px-2 py-2 rounded hover:border text-x">
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default ProjectsLinksContainer
