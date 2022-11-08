import { useRouter } from "next/router";
import { Fragment } from "react";
import { MdArrowBack } from 'react-icons/md';

import useSearchJoke from "src/@joker/common/hooks/search-jokes";
import JokeCardsListComponent from "../JokeCardsListComponent";

export default function ValidSearchTextComponent({ searchText }: { searchText: string }) {

    const router = useRouter();

    const { result: searchResult, isLoading, isError } = useSearchJoke(searchText);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    if (!searchResult) return <h1>No Data returned from API</h1>

    const { result: jokes, total } = searchResult;
   return (
     <Fragment>
        <div className="flex flex-col h-full w-full relative sm:px-24 mt-12">
             
             <div className="flex flex-row items-start content-center">

                <div onClick={() => router.back()} className="hover:bg-gray-200 transition duration-150 ease-in-out rounded-lg">
                    <MdArrowBack size='30'></MdArrowBack>
                </div>

                <div className="flex flex-col ml-3">
                     <span className="font-bold text-gray-800 text-2xl">{`You Searched "${searchText}"`}</span>
                     <span className="text-gray-400 font-semibold text-base">{`${total} Results`}</span>
                </div>

             </div>

             <div className="h-full w-full">
        
                 <JokeCardsListComponent jokes={jokes} searchText={searchText}/>

             </div>
        </div>
     </Fragment>
   );
}