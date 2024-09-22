import { workExperiences } from './WorkExpData';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className="sm:px-10  mb-0" id="work ">
      <div className="w-full text-white-600 ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="col-span-3 lg:ml-20 lg:mr-20 xl:ml-40 xl:mr-40 rounded-xl bg-black-200 border border-black-300 bg-slate-800 max-w-4xl">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 ">
              {workExperiences.map((items, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer rounded-lg sm:px-5 px-2.5 group hover:bg-slate-700 text-neutral-400 hover:text-slate-200"
                >
                  <div className="flex flex-col h-full  justify-start items-center py-2 ">
                    <div className="rounded-3xl w-16 h-16 p-2">
                      <Image
                        src={items.logos}
                        alt={items.name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full rounded-3xl"
                      />
                    </div>
                    <div className="flex-1 w-0.5 mt-4 h-full " />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5 ">
                    <p className="font-bold text-white">{items.name}</p>
                    <p className="text-sm mb-5  ">
                      {items.pos} -- <span>{items.duration}</span>
                    </p>
                    <p className="pb-5">{items.title}</p>
                    <ul className="list-disc md:pl-5  ">
                      {items.bullets &&
                        items.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <a href="/documents/jack-crawford-cv.pdf" download>
              <button
                className="px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3 flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md  transition-all active:scale-95 text-white mx-auto bg-slate-700 hover:bg-slate-500 m-3 md mb-10"
                type="submit"
              >
                Download Resume as PDF
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
