import Tooltip from '../../utils/Tooltip';
import { handleConfetti } from '@/app/hooks/handleConfetti';

function CV() {
  return (
    <>
      <Tooltip className="text-sm" text="as pdf">
        <button
          onClick={handleConfetti}
          className="bg-pink-600 text-white font-bold p-2 rounded-lg text-sm transform hover:scale-110 duration-200 ease-in-out"
        >
          Download CV
        </button>
      </Tooltip>
    </>
  );
}
export default CV;
