import Image from 'next/image'
import Tooltip from '../utils/Tooltip'

function About() {
  return (
    <Tooltip className="text-sm" text="About me">
      <Image src="/icons/about.png" alt="about" width={60} height={60} />
    </Tooltip>
  )
}
export default About
