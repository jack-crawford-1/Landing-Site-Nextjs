import Image from 'next/image'
import '/src/app/globals.css'

import Tooltip from '@/app/components/utils/Tooltip'

export default function DeveloperLogos() {
  return (
    <div>
      <span className=" max-w-[850px] flex flex-row p-5 md:p-0 pt-5 mt-5 bg-slate-200 flex-wrap h-fit justify-center rounded z-0">
        <Tooltip text="React.js">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React.js Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Next.js">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            alt="Next.js Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Typescript">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
            alt="Typescript Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Javascript">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
            alt="Javascript Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="HTML5">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
            alt="HTML Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="CSS3">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
            alt="CSS Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Tailwind CSS">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Node.js">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            alt="Node.js Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Express JS">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            alt="Express Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="NPM">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
            alt="NPM Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="PostgreSQL">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Prisma">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
            alt="Prisma Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Knex.js">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/knexjs/knexjs-original.svg"
            alt="Knex.js Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="SQLite">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
            alt="SQLite Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Git">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg"
            alt="Git Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="Vercel">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
            alt="Vercel Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Docker">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
            alt="Docker Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="OAuth">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg"
            alt="OAuth Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="Vitest">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
            alt="Vitest Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
      </span>
    </div>
  )
}
