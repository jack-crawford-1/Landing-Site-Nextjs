import CV from './icon-links/CV'
import Email from './icon-links/Email'
import Github from './icon-links/Github'

export default function ProjectFooterLinks() {
  return (
    <div className="bg-slate-800 flex flex-row justify-center items-center flex-wrap pb-10 pt-10">
      <div className="pl-3">
        <a
          href="/#about-section"
          className="transform hover:scale-110  duration-200 ease-in-out text-white px-2 py-2 rounded text-xl m-2"
        >
          About
        </a>
      </div>
      <div className="pl-3">
        <a
          href="/#projects-section"
          className="transform hover:scale-125 duration-200 ease-in-out text-white px-2 py-2 rounded text-xl m-2"
        >
          Projects
        </a>
      </div>
      <div className="pl-3">
        <Email />
      </div>

      <div className="pl-3">
        <Github />
      </div>
      <div className="pl-3">
        <CV />
      </div>
    </div>
  )
}
