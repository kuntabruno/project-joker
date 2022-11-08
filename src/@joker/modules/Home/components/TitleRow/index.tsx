import Link from "next/link";

export default function TitleBar() {
    return (
        <div className="flex flex-col sm:mx-20 mx-1 mt-4">
            <div className="flex flex-row flex-start items-center justify-between mb-10">
             <div className="flex flex-col">
              <span className="font-bold text-2xl mb-2">Explore Jokes By Category</span>
              <span className="text-gray-400 font-medium text-sm">Pick a Category Below</span>
             </div>
              <Link href="/jokes"><span className="border-gray-300 border-2 hover:border-blue-200 hover:bg-gray-200 transition duration-150 ease-in-out rounded-lg px-2 py-1 font-medium hover:text-gray-400">Random Joke</span></Link>
            </div>
        </div>
    );
}