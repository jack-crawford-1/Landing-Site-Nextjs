import '../../src/app/globals.css'
import Nav from '@/app/components/nav/Nav'
import Email from '../../src/app/components/Links/Email'
import Github from '@/app/components/Links/Github'
import ProjectsLinksContainer from '@/app/components/projects/ProjectsLinksContainer'

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-slate-800 m-0 items-center w-screen">
      <Nav />
      <div className=" bg-slate-800 text-white mt-20">
        <main className="max-w-3xl p-10">
          <h2 className="text-2xl font-bold pt-4 pb-4">About Me</h2>
          <p className="leading-relaxed text-gray-300 mb-3">
            Hey there! I&apos;m Jack Crawford, a full stack software developer
            from New Zealand. My journey began in account management and
            marketing, but I found my true passion in coding. With a solid
            foundation in React, TypeScript, and Node.js, I enjoy building
            applications that are both functional and user-friendly.{' '}
          </p>

          <p className="leading-relaxed text-gray-300">
            {' '}
            I&apos;m focused on creating inclusive digital experiences and
            continually learning new technologies. Recently, I&apos;ve worked on
            projects like a mini piano app using Tone.js and React, and a
            community garden app with React/Vite and Prisma. I love diving into
            new challenges and expanding my skills with every project.
          </p>

          <h2 className="text-2xl font-bold pt-4 pb-4">Skills</h2>
          <div className="pl-3 text-gray-300 leading-10">
            <p>
              <span className="font-bold">Frontend:</span> React, JavaScript,
              TypeScript, Next.js, HTML/CSS, Tailwind CSS
            </p>
            <p>
              <span className="font-bold">Backend:</span> Node.js, Express, REST
              APIs
            </p>
            <p>
              <span className="font-bold">Database:</span> SQLite, Prisma, Knex
            </p>
            <p>
              <span className="font-bold">Tools:</span> Git/GitHub, Docker,
              Vercel
            </p>
            <p>
              <span className="font-bold">Other:</span> JWTs and OAuth2, Agile
              Methodologies, Project Planning, Leadership
            </p>
          </div>
          <h2 className="text-2xl font-bold pt-4 pb-4">Experience</h2>

          <h3 className="text-xl font-medium mb-2 mt-4">
            Student Developer, Dev Academy Aotearoa; <br /> Wellington, NZ{' '}
            <span className="text-md font-medium">(Jan 2024 - May 2024)</span>
          </h3>
          <ul className="pl-4 mb-2 list-disc text-gray-300">
            <li>
              Completed 700+ hours of coding in JavaScript, TypeScript, React,
              Git, GitHub, REST APIs.
            </li>
            <li>
              Engaged in an intensive, full-stack web development training
              programme emphasising empathy, agile methodologies, and rapid
              technology adoption.
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">
            Account Manager, Trade Me; <br />
            Wellington, NZ (Oct 2020 - Dec 2023)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-gray-300">
            <li className="">
              Managed advertising and recruitment strategies for high-profile
              businesses, enhancing client engagement and outcomes.
            </li>
            <li>
              Worked with Trade Me Analytics, Product, and Engineering teams on
              various projects, including collaborating on the integration of
              the new Trade Me Jobs API with external partners, improving
              service efficiency and reach.
            </li>
            <li>
              Represented Trade Me at industry events, providing insights that
              shaped business and industry strategies.
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">
            Career Break <br />
            (Feb 2020 - Sep 2020)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-gray-300">
            <li>
              Relocated to New Zealand from abroad to spend time with and
              support family.
            </li>
            <li>Worked casually in landscaping roles part-time.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">
            Account Manager, Lead Chat; <br />
            Melbourne, AUS (Nov 2016 - Dec 2019)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-gray-300">
            <li>
              Effectively managed client needs across multiple time zones
              including the US, UK, and UAE.
            </li>
            <li>
              Ensured service delivery met client expectations and worked with
              clients to optimise leads.
            </li>
            <li>
              Met new business targets through successful prospecting, pipeline
              management, and sales cycle management.
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">
            Digital Sales Manager, Smudge; <br />
            Melbourne, AUS (Jun 2016 - Dec 2016)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-gray-300">
            <li>
              Introduced display advertising as a new product to complement the
              existing print business.
            </li>
            <li>
              Partnered with iconic Australian brands for digital and print
              advertising to grow sales.
            </li>
            <li>Engaged SEO specialists to boost site traffic.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">
            Key Accounts Manager, Zomato; <br />
            Melbourne, AUS (Jan 2015 - Jun 2016)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-gray-300">
            <li>
              In a start-up environment as the first sales hire in Australia,
              exceeded sales targets while recruiting, training, and mentoring
              the sales team.
            </li>
            <li>
              Planned and implemented on-site marketing events for clients.
            </li>
            <li>Managed key accounts.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 mt-4">
            Accounts Manager, NewsCorp; <br />
            Melbourne, AUS (Jan 2015 - Jun 2016)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-gray-300">
            <li>
              Sold print and display advertising across multiple print and
              digital mastheads.
            </li>
            <li>Reacquired lapsed clients with a high win-back rate.</li>
          </ul>
        </main>
        <ProjectsLinksContainer />
        {/* <div>
          <a href="/jack-crawford-cv.pdf" download>
            <button className="bg-pink-600 text-white mt-2 font-bold p-2 rounded-lg text-sm mb-20 ml-10 transform hover:scale-110 duration-200 ease-in-out">
              Download CV
            </button>
          </a>
          <span className="pl-5 transform hover:scale-110 hover:text-pink-400 hover:font-bold">
            <Email />
          </span>
        </div> */}
      </div>
    </div>
  )
}
