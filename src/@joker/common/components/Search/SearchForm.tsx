export default function SearchForm() {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <input
          type="search"
          className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-gray-200 bg-clip-padding
                    border border-solid
                    rounded-lg
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none"
          id="search"
          placeholder="Search Here..."
        />
      </div>
    </div>
  );
}
