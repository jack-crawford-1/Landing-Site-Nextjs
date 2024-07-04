import Tooltip from '../utils/Tooltip'
import Image from 'next/image'

function Project() {
  return (
    <Tooltip className="text-sm" text="Projects">
      <Image src="/icons/project.png" alt="projects" width={50} height={50} />
    </Tooltip>
  )
}

export default Project
