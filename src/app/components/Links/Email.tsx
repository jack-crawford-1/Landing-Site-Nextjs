import Tooltip from '../utils/Tooltip'
import Image from 'next/image'

function Email() {
  return (
    <Tooltip className="text-sm" text="hello@jackcrawford.co.nz">
      <a href="mailto:hello@jackcrawford.co.nz" target="_blank">
        <Image src="/icons/email.png" alt="email" width={50} height={50} />
      </a>
    </Tooltip>
  )
}

export default Email
