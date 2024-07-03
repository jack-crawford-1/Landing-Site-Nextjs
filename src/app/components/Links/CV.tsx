import Tooltip from '../utils/Tooltip'
import Image from 'next/image'

function CV() {
  return (
    <>
      <Tooltip className="text-sm" text="as pdf">
        <a href="/documents/jack-crawford-cv.pdf" download>
          <button className="bg-pink-600 text-white font-bold p-2 rounded-lg text-sm  transform hover:scale-110 duration-200 ease-in-out">
            Download CV
          </button>
        </a>
      </Tooltip>
    </>
  )
}
export default CV
