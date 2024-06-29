'use client'

import Link from 'next/link'
import '../../src/app/about.css'
import CV from '@/app/components/Links/CV'

function aboutPage() {
  return (
    <div className="about-page">
      <div className="hero"></div>
      <nav>
        <div className="logo">
          <span className="letter" style={{ color: '#F28B82' }}>
            J
          </span>
          <span className="letter" style={{ color: '#FBBC04' }}>
            a
          </span>
          <span className="letter" style={{ color: '#FFF475' }}>
            c
          </span>
          <span className="letter" style={{ color: '#CCFF90' }}>
            k
          </span>
          <span className="letter" style={{ color: '#A7FFEB' }}>
            {' '}
          </span>
          <span className="letter" style={{ color: '#CBF0F8' }}>
            C
          </span>
          <span className="letter" style={{ color: '#AECBFA' }}>
            r
          </span>
          <span className="letter" style={{ color: '#D7AEFB' }}>
            a
          </span>
          <span className="letter" style={{ color: '#FDCFE8' }}>
            w
          </span>
          <span className="letter" style={{ color: '#E6C9A8' }}>
            f
          </span>
          <span className="letter" style={{ color: '#E8EAED' }}>
            o
          </span>
          <span className="letter" style={{ color: '#F28B82' }}>
            r
          </span>
          <span className="letter" style={{ color: '#FBBC04' }}>
            d
          </span>
        </div>
        <ul>
          <li>
            <Link href={'/projects'}>Projects</Link>
          </li>

          <li>
            <Link href={'/'}>Home</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h2>About Me</h2>
        <p>
          As someone who has thrived in dynamic sales roles, I&apos;ve learnt
          the importance of customer-centric strategies and the power of
          effective communication. Now, channelling these skills into software
          development, I have equipped myself with strong skills in React,
          TypeScript, Node.js, and more. I&apos;m fascinated by how technology
          can solve complex problems and am interested in crafting code
          that&apos;s not only functional but also user-friendly and accessible.
        </p>

        <h2>Skills</h2>
        <p>
          Frontend: React, JavaScript, TypeScript, Next.js, HTML/CSS, Tailwind
          CSS
        </p>
        <p>Backend: Node.js, Express, REST APIs</p>
        <p>Database: SQLite, Prisma, Knex</p>
        <p>Tools: Git/GitHub, Docker, Vercel</p>
        <p>
          Other: JWTs and OAuth2, Agile Methodologies, Project Planning,
          Leadership
        </p>

        <h2>Experience</h2>

        <h3>
          Student Developer, Dev Academy Aotearoa; Wellington, NZ (Jan 2024 -
          May 2024)
        </h3>
        <ul>
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

        <h3>Account Manager, Trade Me; Wellington, NZ (Oct 2020 - Dec 2023)</h3>
        <ul>
          <li>
            Managed advertising and recruitment strategies for high-profile
            businesses, enhancing client engagement and outcomes.
          </li>
          <li>
            Worked with Trade Me Analytics, Product, and Engineering teams on
            various projects, including collaborating on the integration of the
            new Trade Me Jobs API with external partners, improving service
            efficiency and reach.
          </li>
          <li>
            Represented Trade Me at industry events, providing insights that
            shaped business and industry strategies.
          </li>
        </ul>

        <h3>Career Break (Feb 2020 - Sep 2020)</h3>
        <ul>
          <li>
            Relocated to New Zealand from abroad to spend time with and support
            family.
          </li>
          <li>Worked casually in landscaping roles part-time.</li>
        </ul>

        <h3>
          Account Manager, Lead Chat; Melbourne, AUS (Nov 2016 - Dec 2019)
        </h3>
        <ul>
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

        <h3>
          Digital Sales Manager, Smudge; Melbourne, AUS (Jun 2016 - Dec 2016)
        </h3>
        <ul>
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

        <h3>
          Key Accounts Manager, Zomato; Melbourne, AUS (Jan 2015 - Jun 2016)
        </h3>
        <ul>
          <li>
            In a start-up environment as the first sales hire in Australia,
            exceeded sales targets while recruiting, training, and mentoring the
            sales team.
          </li>
          <li>Planned and implemented on-site marketing events for clients.</li>
          <li>Managed key accounts.</li>
        </ul>

        <h3>
          Accounts Manager, NewsCorp; Melbourne, AUS (Jan 2015 - Jun 2016)
        </h3>
        <ul>
          <li>
            Sold print and display advertising across multiple print and digital
            mastheads.
          </li>
          <li>Reacquired lapsed clients with a high win-back rate.</li>
        </ul>

        <CV />
      </main>
    </div>
  )
}

export default aboutPage
