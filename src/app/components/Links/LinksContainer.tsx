import Email from './Email'
import Github from './Github'
import CV from './CV'
import Link from 'next/link'
import About from './About'
import Project from '../Links/Project'
import WobbleAnimation from '../utils/Wobble'

function LinksContainer() {
  return (
    <>
      <WobbleAnimation />
      <div className="flex flex-wrap md:w-screen flex-row items-center pl-10 md:p-10 m-1 text-xl">
        <div className="transform hover:scale-125 duration-200 ease-in-out px-2 wobble">
          <Github />
        </div>
        <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2 wobble rounded  text-xl">
          <Email />
        </div>
        <Link href="./about">
          <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2 wobble rounded  text-xl">
            <About />
          </div>
        </Link>
        <Link href="./projects">
          <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2  rounded wobble text-xl">
            <Project />
          </div>
        </Link>
        <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2 rounded wobble text-xl">
          <CV />
        </div>
      </div>
    </>
  )
}

export default LinksContainer
