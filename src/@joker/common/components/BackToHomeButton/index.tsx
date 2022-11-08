import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

export default function BackToHomeButton() {
  return (
    <div className='flex flex-row items-center justify-start  mt-4 mb-10'>
      <Link href='/'>
        <div className='flex flex-row items-center justify-start hover:bg-gray-200 transition duration-150 ease-in-out rounded-lg px-2 py-1'>
          <MdArrowBack size='30'></MdArrowBack>
          <span className='text-base font-semibold text-gray-800 ml-4'>
            Go back
          </span>
        </div>
      </Link>
    </div>
  );
}
