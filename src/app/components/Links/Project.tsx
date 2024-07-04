import Tooltip from '../utils/Tooltip'
import Image from 'next/image'

function Project() {
  return (
    <Tooltip className="text-sm" text="Projects">
      <Image src="/icons/project.png" alt="projects" width={60} height={60} />
    </Tooltip>
  )
}

export default Project
