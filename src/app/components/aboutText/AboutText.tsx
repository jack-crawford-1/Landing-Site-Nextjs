import React from 'react'
import { ColourfulParagraph } from './ColourfulParagraph'
import LinksToCode from '../LinksToCode'
import Showcase from '../../showcase/Showcase'

function AboutText() {
  return (
    <>
      <div>
        <div className="m-8 lg:transform lg:hover:scale-110 lg:transition lg:duration-500 lg:ease-in-out">
          <ColourfulParagraph>Hi, I&apos;m Jack,</ColourfulParagraph>
          <ColourfulParagraph>Web Developer.</ColourfulParagraph>
        </div>
        <div className="m-8 lg:transform lg:hover:scale-110 lg:transition lg:duration-500 lg:ease-in-out">
          <LinksToCode />
        </div>
      </div>
    </>
  )
}

export default AboutText
