import Head from 'next/head';
import Link from 'next/link';
import { MdArrowBack } from "react-icons/md";
import Header from 'src/@joker/common/components/Header';
import JokeComponent from 'src/@joker/common/components/Joke';
import useRandomJoke from 'src/@joker/common/hooks/random-joke';
import { Joke } from 'src/@joker/models/joke/joke.model';

export default function RandomJokePage() {

    const { joke, isLoading, isError } = useRandomJoke();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    console.log(joke);
    if (joke)
    return (
    
    <div>
      <Head>
        <title>Random Joke in all Categories</title>
        <meta name="description" content="Random Joke in all Categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className="h-100">
      <div className="flex flex-row flex-start justify-start w-100 h-screen">

               <div className="w-3/12 bg-gray-200 border-r-2 border-indigo-300">
                   
               </div>

               <div className="w-9/12 flex-col flex-center justify-center">
                <div className="flex-col">
                <div className="w-100 mb-10">
                    <Link href="/"><MdArrowBack size="30"></MdArrowBack></Link>
                </div> 
                 {  
                 <JokeComponent id={joke.id} url={joke.url} value={joke.value} icon_url={joke.icon_url} created_at={joke.created_at} updated_at={joke.updated_at} categories={joke.categories}></JokeComponent>
                 }
                </div>
              </div>
        </div>
      </main>
      
    </div>
    );
}