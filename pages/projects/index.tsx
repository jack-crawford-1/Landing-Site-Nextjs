'use client';

import '../../src/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/app/components/projects/projectsList';
import { useEffect, useState } from 'react';

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
      <div className=" p-6 bg-slate-800 pb-20 pt-10">
        <h2 className="text-2xl font-bold text-slate-200 pb-10 md:pl-60">
          Projects
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.route}`} key={index}>
              <div className="border-8 border-white w-full sm:w-[460px] md:w-[500px] h-[350px] text-slate-900 flex flex-col rounded-xl overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105">
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
                <div className="bg-gray-100 flex-grow p-4 flex flex-col justify-between">
                  <h2 className="text-xl sm:text-2xl font-semibold m-2 text-slate-800">
                    {project.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
