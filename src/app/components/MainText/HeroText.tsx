import React from 'react'
import { ColourfulParagraph } from './ColourfulParagraph'

function HeroText() {
  return (
    <>
      <div>
        <div className="md:m-8 p-5 pl-10 pb-10 md:p-0 md:transform md:hover:scale-110 md:transition md:duration-500 md:ease-in-out text-6xl md:text-8xl">
          <ColourfulParagraph>Hi, I&apos;m Jack,</ColourfulParagraph>
          <ColourfulParagraph>Full Stack Developer.</ColourfulParagraph>
        </div>
      </div>
    </>
  )
}

export default HeroText
