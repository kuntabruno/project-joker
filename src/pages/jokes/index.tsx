import { useSWRConfig } from 'swr';

import useRandomJoke from 'src/@joker/common/hooks/random-joke';

import DocHead from 'src/@joker/common/components/DocHead';
import JokeComponent from 'src/@joker/common/components/Joke';
import SidebarLayout from 'src/@joker/common/components/SidebarLayout';
import BackToHomeButton from 'src/@joker/common/components/BackToHomeButton';
import { LoadNewJokeButton } from 'src/@joker/modules/Jokes/components/LoadNewJokeButton';

import { randomJokeApiUrl } from 'src/@joker/common/utils';

import styles from './Joke.module.scss';


const RandomJokePage = () => {

  const { mutate } = useSWRConfig()
  
    const { joke, isLoading, isError } = useRandomJoke();

    function handleLoadNewJoke() {
      mutate(randomJokeApiUrl());
    }

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error</h1>;
    if (joke)
    return (
    
    <div>
      <DocHead title="Random Joke" description=" View a random joke"/>
      <SidebarLayout>
              <div className={styles.jokeSection}>
              <div className={`flex flex-col px-6 relative h-full`}>
              <BackToHomeButton></BackToHomeButton>
                <div className="flex flex-row items-start justify-center w-full px-6">  
                 {  
                 <JokeComponent id={joke.id} url={joke.url} value={joke.value} icon_url={joke.icon_url} created_at={joke.created_at} updated_at={joke.updated_at} categories={joke.categories}></JokeComponent>
                 }
                 </div>
                 {/* <div className={`${styles.loadNewButtonContainer}`}>
                    <div className="flex flex-row items-center justify-center w-full">
                        <button onClick={handleLoadNewJoke}>Load New</button>
                    </div>
                 </div> */}
                 <LoadNewJokeButton handleLoadNewJoke={handleLoadNewJoke} buttonText="Load New Joke"></LoadNewJokeButton>
              </div>
              </div>
      </SidebarLayout>
                
    </div>
    );
}

export default RandomJokePage;