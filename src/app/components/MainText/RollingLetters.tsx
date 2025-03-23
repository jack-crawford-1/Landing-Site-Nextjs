// import React from 'react'
// import { motion } from 'framer-motion'
// import { ColourfulLetter } from '../utils/ColourfulLetter'

// export default function RollingLetters({ children }: { children: string }) {
//   const text = children.split(' ')

//   return (
//     <span>
//       {text.map((word, wordIndex) => (
//         <span key={wordIndex} className="mr-2 inline-flex">
//           {word.split('').map((letter, letterIndex) => (
//             <motion.span
//               key={letterIndex}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 1,
//                 delay: wordIndex * 0.3 + letterIndex * 0.05,
//                 type: 'spring',
//                 stiffness: 10,
//                 damping: 10,
//               }}
//             >
//               <ColourfulLetter letter={letter} />
//             </motion.span>
//           ))}
//         </span>
//       ))}
//     </span>
//   )
// }

import React from 'react';
import { motion } from 'framer-motion';
import { ColourfulLetter } from '../../components/utils/ColourfulLetter';

export default function RollingText({ children }: { children: string }) {
  const text = children.split(' ');

  return (
    <span>
      {text.map((word, wordIndex) => (
        <span key={wordIndex} className="mr-2 inline-flex">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, y: [0, 0, 0] }}
              transition={{
                duration: 1,
                delay: wordIndex * 0.1 + letterIndex * 0.05,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <ColourfulLetter letter={letter} />
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
