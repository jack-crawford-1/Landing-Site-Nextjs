import Email from './icon-links/Email';
import Github from './icon-links/Github';
import CV from './icon-links/CV';

export default function HomeLinksContainer() {
  const scrollToProjectsSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAboutSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperiencetSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-center items-center m-1 md:p-0 md:pt-0 p-5">
      <div className="md:ml-2 transform m-2 hover:scale-110 duration-200 ease-in-out text-white text-xl order-2">
        <Email />
      </div>
      {/* <div className="transform hover:scale-125 duration-200 ease-in-out m-2 order-1 md:order-1">
        <Github />
      </div> */}
      <div className="transform hover:scale-110 scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded text-xl m-2 order-1 md:order-2">
        <CV />
      </div>
      <a
        href="#about-section"
        onClick={scrollToAboutSection}
        className="transform hover:scale-110  duration-200 ease-in-out text-white px-2 py-2 rounded text-lg m-2"
      >
        About
      </a>
      <a
        href="#projects-section"
        onClick={scrollToProjectsSection}
        className="transform hover:scale-110 duration-200 ease-in-out text-white px-2 py-2 rounded text-lg m-2"
      >
        Projects
      </a>
      {/* <a
        href="#about-section"
        onClick={scrollToExperiencetSection}
        className="transform hover:scale-110  duration-200 ease-in-out text-white px-2 py-2 rounded text-xl m-2"
      >
        Experience
      </a> */}
    </div>
  );
}
