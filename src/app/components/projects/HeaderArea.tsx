import { ColourfulParagraph } from '../MainText/ColourfulParagraph'

function HeaderArea() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full text-white text-center items-center text-6xl md:text-7xl font-extrabold pt-10">
        <ColourfulParagraph>PROJECTS</ColourfulParagraph>
      </div>

      <div className="w-full text-center max-w-4xl text-white text-center items-center text-2xl md:text-3xl font-bold p-10">
        Source code, deployed sites (if available) and project details on some
        things I&apos;ve worked on.
      </div>
    </div>
  )
}

export default HeaderArea
