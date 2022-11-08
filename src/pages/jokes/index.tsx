import Link from 'next/link';
import { MdArrowBack } from "react-icons/md";

import useRandomJoke from 'src/@joker/common/hooks/random-joke';

import DocHead from 'src/@joker/common/components/DocHead';
import JokeComponent from 'src/@joker/common/components/Joke';
import SidebarLayout from 'src/@joker/common/components/SidebarLayout';


const RandomJokePage = () => {

    const { joke, isLoading, isError } = useRandomJoke();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error</h1>;
    if (joke)
    return (
    
    <div>
      <DocHead title="Random Joke" description=" View a random joke"/>
      <SidebarLayout>
              <div className="flex flex-col px-6">
                <div className="mb-10">
                    <Link href="/"><MdArrowBack size="30"></MdArrowBack></Link>
                </div>
                <div className="flex flex-row items-start justify-center w-full px-6">  
                 {  
                 <JokeComponent id={joke.id} url={joke.url} value={joke.value} icon_url={joke.icon_url} created_at={joke.created_at} updated_at={joke.updated_at} categories={joke.categories}></JokeComponent>
                 }
                 </div>
              </div>
      </SidebarLayout>
                
    </div>
    );
}

export default RandomJokePage;