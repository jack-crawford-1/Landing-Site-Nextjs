import Tooltip from '../../utils/Tooltip';
import { handleConfetti } from '@/app/hooks/handleConfetti';
import Image from 'next/image';

function CV() {
  return (
    <>
      <Tooltip className="text-sm" text="as pdf">
        <button
          className="text-lg hover:scale-110 transform duration-200 ease-in-out flex flex-row items-center"
          onClick={handleConfetti}
        >
          <Image src="/icons/download.svg" alt="cv" width={20} height={20} />
          CV
        </button>
      </Tooltip>
    </>
  );
}
export default CV;
