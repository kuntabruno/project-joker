import Link from 'next/link';

import { ICategoryButtonProps } from "src/@joker/interfaces/category-button/category-button-props.interface";

export default function CategoryCard({ id, name, url }: ICategoryButtonProps) {

    return (
        <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-bold mb-2 text-gray-500">#{name}</h5>
          <Link href={`/jokes/${name}`}><button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{name} Joke</button></Link>
        </div>
      </div>
    );
}