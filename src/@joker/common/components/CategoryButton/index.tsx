import * as React from 'react';
import { ICategoryButtonProps } from 'src/@joker/interfaces/category-button/category-button-props.interface';

export default function CategoryButton({
  id,
  name,
  url,
}: ICategoryButtonProps) {
  return (
    <React.Fragment>
      <div className='border-l-2 border-neutral-100'>
      <button
        type='button'
        className='w-full p-2 text-gray-800 hover:text-gray-500 font-medium text-xs leading-normal capitalize rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
      >
        {name}
      </button>
      </div>
    </React.Fragment>
  );
}
