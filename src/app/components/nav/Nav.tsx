import Link from 'next/link'
import { ColourfulParagraph } from '../MainText/ColourfulParagraph'
import Github from '../Links/Github'
import CV from '../Links/CV'

export default function Nav() {
  return (
    <nav className="fixed start-0 top-0 w-full bg-slate-800 text-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="text-6xl font-extrabold lg:pl-48">
            <span style={{ color: '#F28B82' }}>J</span>
            <span style={{ color: '#D7AEFB' }}>a</span>
            <span style={{ color: '#FFF475' }}>c</span>
            <span style={{ color: '#CCFF90' }}>k</span>
          </div>
        </a>

        <ul className="mt-4 flex  rounded-lg  p-4 font-medium md:mt-0 flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
          <li className="p-2 hover:text-pink-600 hover:scale-110 transform duration-200 ease-in-out">
            <Link href="/projects">Projects </Link>
          </li>
          <li className="p-2 hover:text-pink-600 hover:scale-110 transform duration-200 ease-in-out">
            <Link href="/about">About </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
