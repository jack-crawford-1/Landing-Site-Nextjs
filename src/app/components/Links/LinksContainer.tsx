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
      <div className="md:ml-5 transform m-2 hover:scale-110 text-white px-2 py-2 rounded hover:border text-x">
        <Email />
      </div>

      <div className="md:ml-5 transform m-2 hover:scale-110 text-white px-2 py-2 rounded hover:border text-x">
        <Link href="/projects">View Projects</Link>
      </div>

      <div className="transform hover:scale-110 text-white px-2 py-2 rounded hover:border text-x">
        <CV />
      </div>
      {/* <div className="md:ml-5 transform m-2 hover:scale-110 text-white px-2 py-2 rounded hover:border text-x">
        <Link href="/articles">Read Blog</Link>
      </div> */}
    </div>
  )
}

export default LinksContainer
