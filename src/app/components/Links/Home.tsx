import Image from 'next/image'
import Tooltip from '../utils/Tooltip'

function Home() {
  return (
    <Tooltip className="text-sm" text="Home">
      {/* <a href="./"> */}
      <Image src="/icons/home.png" alt="home" width={50} height={50} />
      {/* </a> */}
    </Tooltip>
  )
}
export default Home
