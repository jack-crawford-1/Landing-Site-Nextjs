import React from 'react'
import { ColourfulLetter } from './ColourfulLetter'

export function ColourfulParagraph({
  children,
}: {
  children: React.ReactNode
}) {
  let letters: React.ReactNode[] = []

  if (typeof children === 'string') {
    letters = children
      .split('')
      .map((letter, index) => <ColourfulLetter key={index} letter={letter} />)
  } else {
    letters = React.Children.map(
      children,
      (child) => child
    ) as React.ReactNode[]
  }

  return <p>{letters}</p>
}
