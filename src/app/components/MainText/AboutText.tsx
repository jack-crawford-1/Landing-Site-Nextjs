import React from 'react'
import { ColourfulParagraph } from './ColourfulParagraph'

function AboutText() {
  return (
    <>
      <div>
        <div className="md:m-8 p-5 pb-10 md:p-0 md:transform md:hover:scale-110 md:transition md:duration-500 md:ease-in-out">
          <ColourfulParagraph>Hi, I&apos;m Jack,</ColourfulParagraph>
          <ColourfulParagraph>Web Developer.</ColourfulParagraph>
        </div>
      </div>
    </>
  )
}

export default AboutText
