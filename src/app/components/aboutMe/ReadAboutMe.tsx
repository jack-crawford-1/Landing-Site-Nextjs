'use client'

import React, { useState } from 'react'

function ReadAboutMe() {
  const [showMessage, setShowMessage] = useState(false)

  function showAboutMe(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault()
    setShowMessage(true)
  }

  function hideAboutMe(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault()
    setShowMessage(false)
  }

  return (
    <div className="text-sm text-gray-100 	">
      {showMessage ? (
        <>
          <button onClick={hideAboutMe} className="">
            Hide About
          </button>
          <p className="m-5">
            Hi! I&apos;m Jack Crawford, a full-stack developer based in
            Wellington, New Zealand. My recent graduation from Dev Academy
            Aotearoa has marked a significant milestone in my transition from a
            seasoned account manager to full stack developer.
          </p>
          <p className="m-5">
            As someone who has thrived in dynamic account management roles,
            I&apos;ve learnt the importance of customer-centric strategies and
            the power of effective communication. Now, channelling these skills
            into software development, I&apos;ve equipped myself with strong
            competencies in JavaScript, React, TypeScript, Express.js, and more.
          </p>
          <p className="m-5">
            I&apos;m fascinated by how technology can solve complex problems and
            am committed to crafting code that&apos;s not only functional but
            also user-friendly and accessible. In search of a collaborative,
            innovative environment that values agile practices and
            out-of-the-box thinking, I&apos;m eager to bring my unique
            perspective and dedicated work ethic to a team as passionate about
            technology as I am.
          </p>
        </>
      ) : (
        <button onClick={showAboutMe}>About</button>
      )}
    </div>
  )
}

export default ReadAboutMe
