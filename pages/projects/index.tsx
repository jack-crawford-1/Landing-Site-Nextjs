'use client';

import '../../src/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/components/projects/projectsList';
import { useEffect, useState } from 'react';
import Tooltip from '../../src//app/components/utils/Tooltip';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1140);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className=" p-6 bg-slate-800 pb-20 pt-10 font-barlow ">
        <h2 className="text-2xl font-bold text-slate-200 pb-10 md:pl-60">
          Projects
        </h2>
        <div className=" min-w-fit flex flex-row flex-wrap justify-center  gap-4">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.route}`} key={index}>
              <div className="border-8 border-white w-full sm:w-[460px] lg:w-[400px] md:h-[350px] h-[300px] text-slate-900 flex flex-col rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 ">
                <div className="h-[200px] md:h-[250px] bg-white">
                  {project.image.endsWith('.mp4') ? (
                    <video
                      src={project.image}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full  sm:hide-controls"
                      autoPlay
                      loop
                      playsInline
                      muted
                      controls={!isMobile}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="bg-gray-100  flex-grow p-4 flex flex-col justify-between">
                  <Tooltip
                    text={`Read more about ${project.title}`}
                    className="border-2 border-white border rounded-xl p-2 text-sm text-center hidden md:block"
                  >
                    <h2 className="text-xl  sm:text-2xl font-semibold m-2 text-slate-800 font-barlow hover:text-blue-900 hover:scale-105 transition ease-out delay-20 hover:tooltip">
                      {project.title}
                    </h2>
                  </Tooltip>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// play
