import '../../src/app/globals.css'
import DeveloperLogos from '../../src/app/components/utils/DeveloperLogos'

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-slate-200 m-0 items-center w-screen p-5">
      <div className=" bg-slate-200 text-slate-800">
        <main className="max-w-5xl">
          <h2 className="text-2xl font-bold pt-8 pb-3">Skills</h2>
          <div className=" text-slate-600 leading-8">
            <p>
              <span className="font-bold">Client:</span> React, JavaScript,
              TypeScript, Next.js, HTML/CSS, Tailwind CSS, Vite
            </p>
            <p>
              <span className="font-bold">Server:</span> Node.js, Express
            </p>
            <p>
              <span className="font-bold">Database:</span> PostgreSQL, SQLite,
              Prisma, Knex
            </p>
            <p>
              <span className="font-bold">Web Services:</span> REST APIs, Axios
            </p>
            <p>
              <span className="font-bold">Version Control:</span> Git/GitHub
            </p>
            <p>
              <span className="font-bold">Testing:</span> Mocha, Supertest,
              Vitest, Nock
            </p>
            <p>
              <span className="font-bold">Auth:</span> JWTs, OAuth2, Dotenv
            </p>
            <p>
              <span className="font-bold">Professional Development:</span> Agile
              Methodologies, Project Planning
            </p>
          </div>
          <div className="mt-20 mb-20">
            <DeveloperLogos />
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-3">Experience</h2>
          <h3 className="text-xl font-medium mb-2 mt-4">
            Student Developer, Dev Academy Aotearoa; <br /> Wellington, NZ{' '}
            <span className="text-md font-medium">(Jan 2024 - May 2024)</span>
          </h3>
          <ul className="pl-4 mb-2 list-disc text-slate-600">
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
          <h3 className="text-xl font-medium mb-2 mt-6">
            Account Manager, Trade Me; <br />
            Wellington, NZ (Oct 2020 - Dec 2023)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-slate-600">
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
          <h3 className="text-xl font-medium mb-2 mt-6">
            Career Break <br />
            (Feb 2020 - Sep 2020)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-slate-600">
            <li>
              Relocated to New Zealand from abroad to spend time with and
              support family.
            </li>
            <li>Worked casually in landscaping roles part-time.</li>
          </ul>
          <h3 className="text-xl font-medium mb-2 mt-6">
            Account Manager, Lead Chat; <br />
            Melbourne, AUS (Nov 2016 - Dec 2019)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-slate-600">
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
          <h3 className="text-xl font-medium mb-2 mt-6">
            Digital Sales Manager, Smudge; <br />
            Melbourne, AUS (Jun 2016 - Dec 2016)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-slate-600">
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
          <h3 className="text-xl font-medium mb-2 mt-6">
            Key Accounts Manager, Zomato; <br />
            Melbourne, AUS (Jan 2015 - Jun 2016)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-slate-600">
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
          <h3 className="text-xl font-medium mb-2 mt-6">
            Accounts Manager, NewsCorp; <br />
            Melbourne, AUS (Jan 2015 - Jun 2016)
          </h3>
          <ul className="pl-4 mb-2 list-disc text-slate-600">
            <li>
              Sold print and display advertising across multiple print and
              digital mastheads.
            </li>
            <li>Reacquired lapsed clients with a high win-back rate.</li>
          </ul>
        </main>
      </div>
    </div>
  )
}
