import * as React from 'react';
import { ICategoryButtonProps } from 'src/@joker/interfaces/category-button/category-button-props.interface';

export default function CategoryButton({
  id,
  name,
  url,
}: ICategoryButtonProps) {
  return (
    <React.Fragment>
      <button
        type='button'
        className='w-full inline-block px-6 py-2 text-gray-800 hover:text-gray-500 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
      >
        {name}
      </button>
    </React.Fragment>
  );
}
