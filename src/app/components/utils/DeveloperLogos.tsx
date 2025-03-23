import Image from 'next/image';
import '/src/app/globals.css';

import Tooltip from '@/app/components/utils/Tooltip';

export default function DeveloperLogos() {
  return (
    <div>
      <span className="max-w-[850px] flex flex-row  flex-wrap justify-center rounded-xl z-0">
        <Tooltip text="React.js">
          <Image
            src="/logos/react.png"
            alt="React.js Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
        <Tooltip text="Next.js">
          <Image
            src="/logos/next.png"
            alt="Next.js Logo"
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

        <Tooltip text="Typescript">
          <Image
            src="/logos/typescript.png"
            alt="Typescript Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="Node.js">
          <Image
            src="/logos/node.png"
            alt="Node.js Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="Tailwind CSS">
          <Image
            src="/logos/tailwind.png"
            alt="Tailwind Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="Prisma">
          <Image
            src="/logos/prisma.png"
            alt="Prisma Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="PostgreSQL">
          <Image
            src="/logos/psql.png"
            alt="PostgreSQL Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="MongoDB">
          <Image
            src="/logos/MongoDB.png"
            alt="MongoDB Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>

        <Tooltip text="JWT">
          <Image
            src="/logos/jwt.svg"
            alt="OAuth Logo"
            width={50}
            height={50}
            className="m-4"
          />
        </Tooltip>
      </span>
    </div>
  );
}
