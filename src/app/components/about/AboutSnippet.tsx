import '../../../app/globals.css';

export default function AboutSnippet() {
  const scrollToProjectsSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col bg-transparent pb-10 items-center w-full p-5 font-barlow md:mt-[-40px] ">
      <div className="text-slate-200 rounded-md">
        <main className="max-w-2xl p-5 md:p-10 mx-auto">
          <div className="text-left">
            <h2 className="md:text-4xl text-2xl font-bold text-slate-200 pt-6 pb-4 uppercase">
              About Me
            </h2>
            <p className="leading-relaxed text-slate-300 mb-6 max-w-5xl">
              With over a decade of experience as an account manager, I&apos;ve
              had the opportunity to support people from all walks of life.
              Throughout my career, I developed a reputation for being
              detail-oriented, solution-focused, and genuinely curious — traits
              that naturally drew me toward the world of technology.
            </p>
            <p className="leading-relaxed text-slate-300 mb-6 max-w-5xl">
              Motivated by that curiosity, I transitioned into software
              development after completing Dev Academy&apos;s immersive
              bootcamp. This shift allowed me to pair my communication and
              problem-solving strengths with technical skills, opening the door
              to creative, impactful work in a new field.
            </p>
            <p className="leading-relaxed text-slate-300 max-w-5xl">
              I&apos;m always keen to learn and enjoy challenges that involve
              both people and problem-solving. Outside of work, I like spending
              time outdoors, playing guitar, and keeping my garden alive — or at
              least trying to.
            </p>
          </div>

          <a
            href="#projects-section"
            onClick={scrollToProjectsSection}
            className=" m-3 ml-20"
          >
            <button className="bg-black flex items-center font-bold text-white hover:scale-105 px-4 py-2 rounded-md transition border-2 border-white m-10">
              See Some Of My Projects
            </button>
          </a>
        </main>
      </div>
    </div>
  );
}
