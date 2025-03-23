// 'use client';

// import '../../src/app/globals.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import { projects } from '@/app/components/projects/projectsList';
// import { useEffect, useState } from 'react';
// import Tooltip from '../../src//app/components/utils/Tooltip';

// export default function Projects() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 1140);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <>
//       <div className=" p-6 bg-slate-800 pb-20 pt-10 font-barlow ">
//         <h2 className="text-2xl font-bold text-slate-200 pb-10 md:pl-60">
//           Projects
//         </h2>
//         <div className=" min-w-fit flex flex-row flex-wrap justify-center  gap-4">
//           {projects.map((project, index) => (
//             <Link href={`/projects/${project.route}`} key={index}>
//               <div className="border-8 border-white w-full sm:w-[460px] lg:w-[400px] md:h-[350px] h-[300px] text-slate-900 flex flex-col rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ">
//                 <div className="h-[200px] md:h-[250px] bg-white">
//                   {project.image.endsWith('.mp4') ? (
//                     <video
//                       src={project.image}
//                       width={500}
//                       height={300}
//                       className="object-cover w-full h-full  sm:hide-controls"
//                       autoPlay
//                       loop
//                       playsInline
//                       muted
//                       controls={!isMobile}
//                     />
//                   ) : (
//                     <Image
//                       src={project.image}
//                       alt={project.alt}
//                       width={500}
//                       height={300}
//                       className="object-cover w-full h-full"
//                     />
//                   )}
//                 </div>
//                 <div className="bg-gray-100  flex-grow p-4 flex flex-col justify-between">
//                   <Tooltip
//                     text={`Read more about ${project.title}`}
//                     className="border-2 border-white border rounded-xl p-2 text-sm text-center hidden md:block"
//                   >
//                     <h2 className="text-xl  sm:text-2xl font-semibold m-2 text-slate-800 font-barlow hover:text-blue-900 hover:scale-105 transition ease-out delay-20 hover:tooltip">
//                       {project.title}
//                     </h2>
//                   </Tooltip>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

'use client';

import { useState } from 'react';
import { projects } from '@/app/components/projects/ProjectContent';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import RollingText from '../../src/app/components/MainText/RollingLetters';
import Link from 'next/link';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];
  const [showVideo, setShowVideo] = useState(true);

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setShowVideo(true);
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setShowVideo(true);
  };

  const router = useRouter();

  return (
    <div className="outer-container  bg-transparent min-h-screen p-0 md:p-10 2xl:p-0 flex flex-col items-center 2xl:justify-start rounded-md md:w-screen">
      <div className="hero-container w-full max-w-7xl mx-auto flex justify-start md:justify-start items-center">
        <div className="p-6 flex flex-col md:flex-row items-center md:items-center">
          {/* <Hero /> */}
          <div
            className=" text-white text-4xl sm:text-4xl font-bold text-center  w-full pb-1 md:p-5 2xl:p-20 capitalize tracking-wide
"
          >
            {/* <RollingText>{project.title}</RollingText> */}
            <h2 className="uppercase">Projects</h2>
          </div>

          <ul className="text-sm font-bold w-fit flex hidden">
            <li>
              <Link href="/about" className="whitespace-nowrap">
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="inner-container flex flex-col xl:flex-row 2xl:mt-30 w-full max-w-7xl mx-auto gap-6 xl:gap-12">
        <div className="video-container w-full xl:w-[70%]">
          <div className="inner-video-container w-full border border-white md:border-8 border-0 rounded-md p-3 md:p-0">
            <video
              src={project.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video max-w-[1200px] border-l-4 border-r-4 md:border-l-8 md:border-r-8 border-black rounded-md"
            >
              <source src={project.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="info-container w-full xl:w-[40%]">
          <div className="inner-info-container h-full ">
            <div className="text-center md:text-left mb-5 p-5 rounded-md">
              <h2 className="font-bold text-3xl xl:text-2xl text-slate-100 mb-5 mt-[-20px] ">
                {project.title}
              </h2>

              <p className=" text-slate-200  md:leading-7 leading-6 text-sm xl:text-base mt-2 md:pl-0 md:pr-5  ">
                {project.description}
              </p>
              {/* <button
                className="bg-black font-bold text-white hover:scale-105 rounded-md transition text-sm mt-4"
                onClick={() => router.push(`/project/${project.route}`)}
              >
                Read More...
              </button> */}
            </div>
            <div className="flex md:flex-wrap justify-center xl:justify-start gap-4 mt-4 xl:mt-5 ">
              <button
                className="bg-transparent flex items-center font-bold text-white hover:scale-105 px-4 py-2 rounded-md transition border-0 border-white order-1"
                onClick={prevProject}
              >
                <Image
                  src="/icons/back.png"
                  alt="next"
                  width={20}
                  height={20}
                />
                <span className="ml-2 hidden md:inline">Previous Project</span>
              </button>

              {/* <button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-black flex items-center font-bold text-white hover:scale-105 px-4 py-2 rounded-md transition border-2 border-white"
              >
                <Image
                  src="/logos/github-logo.png"
                  alt="GitHub"
                  width={30}
                  height={30}
                />
                <span className="ml-2 hidden md:inline">Code</span>
              </button> */}
              {/* <button
                className="bg-black font-bold text-white hover:scale-105 px-4 py-2 rounded-md transition border-2 border-white text-sm "
                onClick={() => router.push(`/project/${project.route}`)}
              >
                Read More
              </button> */}

              <button
                className="bg-green-600 flex items-center font-bold text-white hover:scale-105 px-4 py-2 rounded-md transition border-0 border-white order-3 md:order-2"
                onClick={nextProject}
              >
                <Image
                  src="/icons/next.png"
                  alt="next"
                  width={20}
                  height={20}
                />
                <span className="ml-2 hidden md:inline">Next Project</span>
              </button>
              <button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-black flex items-center font-bold text-white hover:scale-105 px-4 py-2 rounded-md transition border-0 border-white order-2"
              >
                <Image
                  src="/logos/github-logo.png"
                  alt="GitHub"
                  width={30}
                  height={30}
                />
                <span className="ml-2 hidden md:inline">See Code</span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center mt-5 xl:mt-10 ">
              <span className="text-lg font-semibold mt-3 mb-9 md:mb-1 md:mt-0 text-slate-100 ">
                Tech Stack
              </span>
              <div className=" flex justify-around items-center xl:justify-start gap-5 md:gap-6 mt-2 xl:mt-5">
                {project.icons?.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
