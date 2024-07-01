import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <nav className="fixed start-0 top-0 w-full bg-slate-800 text-white pt-5">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="text-6xl font-extrabold lg:pl-48">
            <span style={{ color: '#87CEFA' }}>J</span>
            <span style={{ color: '#FFCC33' }}>a</span>
            <span style={{ color: '#00FF7F' }}>c</span>
            <span style={{ color: '#FFA343' }}>k</span>
          </div>
        </a>

        <style>
          {`
              .gradient-outline {
                color: #1e293b;
                text-shadow: 
                  -1px -1px 0 #eeeee4,  
                  1px -1px 0 #eeeee4,
                  -1px 1px 0 #eeeee4,
                  1px 1px 0 #eeeee4;
              }
              `}
        </style>

        <ul className="mt-4 flex rounded-lg p-4 font-medium md:mt-0 flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
          {currentPath !== '/projects' && (
            <Link href="/projects">
              <li className="p-2 hover:text-pink-600 hover:scale-110 transform duration-200 ease-in-out">
                Projects
              </li>
            </Link>
          )}
          {currentPath !== '/about' && (
            <Link href="/about">
              <li className="p-2 hover:text-pink-600 hover:scale-110 transform duration-200 ease-in-out">
                About
              </li>
            </Link>
          )}
          <Link href="/">
            <li className="p-2 hover:text-pink-600 hover:scale-110 transform duration-200 ease-in-out">
              Home
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
