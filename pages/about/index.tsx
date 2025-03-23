import Experience from '@/app/components/about/Experience';
import '../../src/app/globals.css';
import Skills from '@/app/components/about/Skills';

export default function AboutSection() {
  return (
    <div className="flex flex-col  m-0 items-center w-screen p-5">
      <Skills />
      {/* <Experience /> */}
    </div>
  );
}
