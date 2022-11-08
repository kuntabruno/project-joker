import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchForm() {

  const [ term, setTerm ] = useState('');
  const router = useRouter();

  function handleSubmit(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    ev.stopPropagation();
    if (term) {
      router.push(`/jokes/search/${term}`);
    }
  }
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="xl:w-96">
        <input
          type="search"
          className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-bold
                    text-gray-700
                    bg-gray-200 bg-clip-padding
                    border border-solid
                    rounded-lg
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none"
          id="search"
          onChange={e => setTerm(e.target.value)}
          placeholder="Search Here..."
        />
      </div>
      <button onClick={handleSubmit} className="ml-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Search</button>
    </div>
  );
}
