import React from 'react'
import { ColourfulParagraph } from './ColourfulParagraph'
import LinksToCode from '../CV'
import Showcase from '../showcase/Showcase'

function AboutText() {
  return (
    <>
      <div>
        <div className="md:m-8 p-5 md:p-0 md:transform md:hover:scale-110 md:transition md:duration-500 md:ease-in-out">
          <ColourfulParagraph>Hi, I&apos;m Jack,</ColourfulParagraph>
          <ColourfulParagraph>Web Developer.</ColourfulParagraph>
        </div>
        <Showcase />
        <div className="m-8 lg:transform lg:hover:scale-110 lg:transition lg:duration-500 lg:ease-in-out">
          <LinksToCode />
        </div>
      </div>
    </>
  )
}

export default AboutText
