import Image from 'next/image'
import Tooltip from '../../utils/Tooltip'

function Github() {
  return (
    <Tooltip className="text-xs" text="GitHub">
      <a href="https://github.com/jack-crawford-1" target="_blank">
        <Image
          src="/icons/github-logo.png"
          alt="github"
          width={50}
          height={50}
        />
      </a>
    </Tooltip>
  )
}
export default Github
