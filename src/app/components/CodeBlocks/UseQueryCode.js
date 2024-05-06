import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import codeBlocks from './CodeBlocks'

const UseQueryCode = () => {
  const [selectedCode, setSelectedCode] = useState('useQuery')

  return (
    <div className="demo">
      <CopyBlock
        language="jsx"
        text={codeBlocks[selectedCode]}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  )
}

export default UseQueryCode
