// import { useState } from 'react'
// import getRandomColour from './GetRandomColour'

// export function ColourfulLetter({ letter }: { letter: string }) {
//   const [colour, setColour] = useState('')

//   const handleMouseEnter = () => {
//     setColour(getRandomColour())
//   }

//   const handleMouseLeave = () => {
//     setColour(getRandomColour())
//   }

//   return (
//     <span
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ color: colour }}
//     >
//       {letter}
//     </span>
//   )
// }

import { useState, useEffect } from 'react';
import { GetRandomColour } from '../utils/GetRandomColour';

export function ColourfulLetter({ letter }: { letter: string }) {
  const [colour, setColour] = useState('#FFFFFF');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setColour(GetRandomColour());
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setColour(GetRandomColour());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: colour,
        transition: isHovered
          ? 'color 0.3s ease-in-out'
          : 'color 3s ease-in-out',
      }}
    >
      {letter}
    </span>
  );
}
