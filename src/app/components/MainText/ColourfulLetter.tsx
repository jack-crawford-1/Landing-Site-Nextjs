import { useState } from 'react'
import getRandomColour from './GetRandomColour'

export function ColourfulLetter({ letter }: { letter: string }) {
  const [colour, setColour] = useState('')

  const handleMouseEnter = () => {
    setColour(getRandomColour())
  }

  const handleMouseLeave = () => {
    setColour(getRandomColour())
  }

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: colour }}
    >
      {letter}
    </span>
  )
}
