import React from 'react'
import { ColourfulLetter } from './ColourfulLetter'

export function ColourfulParagraph({
  children,
}: {
  children: React.ReactNode
}) {
  const letters = (children as string)
    .split('')
    .map((letter, index) => <ColourfulLetter key={index} letter={letter} />)

  return <p>{letters}</p>
}
