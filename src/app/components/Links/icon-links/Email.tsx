import Tooltip from '../../utils/Tooltip';
import Image from 'next/image';

function Email() {
  return (
    <Tooltip className="text-sm" text="hello@jackcrawford.co.nz">
      <a
        href="mailto:hello@jackcrawford.co.nz"
        target="_blank"
        className="text-lg"
      >
        {/* <Image src="/icons/email.png" alt="email" width={60} height={60} /> */}
        Email
      </a>
    </Tooltip>
  );
}

export default Email;
