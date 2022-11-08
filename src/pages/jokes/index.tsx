import { useSWRConfig } from 'swr';

import useRandomJoke from 'src/@joker/common/hooks/random-joke';

import DocHead from 'src/@joker/common/components/DocHead';
import SidebarLayout from 'src/@joker/common/components/SidebarLayout';
import JokeDetailComponent from 'src/@joker/modules/Jokes/components/JokeDetailComponent';

import { randomJokeApiUrl } from 'src/@joker/common/utils';

import styles from './Joke.module.scss';

const RandomJokePage = () => {

  const { mutate } = useSWRConfig();
  
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
            <JokeDetailComponent joke={joke} handleLoadNewJoke={handleLoadNewJoke}/>
          </div>
      </SidebarLayout>
                
    </div>
    );
}

export default RandomJokePage;