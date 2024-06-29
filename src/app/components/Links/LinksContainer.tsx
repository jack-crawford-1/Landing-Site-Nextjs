import Email from './Email'
import Github from './Github'
import CV from './CV'
import Link from 'next/link'

function LinksContainer() {
  return (
    <div className="flex md:flex-row md:w-screen flex-col items-center md:p-10 m-1 text-xl">
      <div className="transform hover:scale-110 ">
        <Github />
      </div>
      <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded  text-xl">
        <Email />
      </div>
      <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded  text-xl">
        <Link href="/about">About</Link>
      </div>

      <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded  text-xl">
        <Link href="/projects">Projects</Link>
      </div>
      <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded  text-xl">
        <CV />
      </div>
    </div>
  )
}

export default LinksContainer
