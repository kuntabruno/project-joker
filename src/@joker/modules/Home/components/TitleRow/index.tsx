import Link from "next/link";

export default function TitleBar() {
    return (
        <div className="flex flex-col sm:mx-20 mx-1 mt-4">
            <div className="flex flex-row flex-start items-center justify-between mb-10">
             <div className="flex flex-col">
              <span className="font-bold text-2xl mb-2">Explore Jokes By Category</span>
              <span className="text-gray-400 font-medium text-sm">Pick a Category Below</span>
             </div>
              <Link href="/jokes">Random Joke</Link>
            </div>
        </div>
    );
}