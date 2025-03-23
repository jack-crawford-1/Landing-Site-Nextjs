import '../../../app/globals.css';
import DeveloperLogos from '../utils/DeveloperLogos';

export default function Skills() {
  return (
    <div className=" text-slate-100 font-barlow">
      <main className="max-w-4xl ">
        <h2 className="text-2xl font-bold pt-5 md:ml-10 pl-10 md:pl-0">
          Skills
        </h2>
        <div className="pt-5 text-slate-200 leading-8 border-0 border border-rone p-10 rounded-xl">
          <p>
            <span className="font-bold">Client:</span> React, Next.js,
            TypeScript, Tailwind CSS, Vite
          </p>
          <p>
            <span className="font-bold">Server:</span> Node.js, Express
          </p>
          <p>
            <span className="font-bold">Database:</span> PostgreSQL, MongoDB,
            Prisma,
          </p>
          <p>
            <span className="font-bold">Web Services:</span> REST APIs, Axios
          </p>
          <p>
            <span className="font-bold">Version Control:</span> Git/GitHub
          </p>

          <p>
            <span className="font-bold">Auth:</span> JWTs, OAuth2, Dotenv
          </p>
          <p>
            <span className="font-bold">Professional Development:</span> Agile
            Methodologies, Project Planning
          </p>
        </div>
        <div className=" ">
          <DeveloperLogos />
        </div>
      </main>
    </div>
  );
}
