import { mutate } from 'swr';

import DocHead from 'src/@joker/common/components/DocHead';
import SidebarLayout from 'src/@joker/common/components/SidebarLayout';
import useRandomJokeInCategory from 'src/@joker/common/hooks/random-joke-in-category';
import JokeDetailComponent from '../JokeDetailComponent';

import { randomJokeInCategoryApiUrl } from 'src/@joker/common/utils';

import styles from './ValidJokeComponent.module.scss';

export default function ValidJokeComponent({ category }: { category: string }) {
  const { joke, isLoading, isError } = useRandomJokeInCategory(category);

  function handleLoadNewJoke() {
    mutate(randomJokeInCategoryApiUrl(category));
  }
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  if (!joke) return <h1>Joke not Found</h1>

    return (
      <div>
        <DocHead
          title={`${category} Joke`}
          description={`View ${category} joke`}
        ></DocHead>
        <SidebarLayout>
          <div className={styles.jokeSection}>
            <JokeDetailComponent
              joke={joke}
              handleLoadNewJoke={handleLoadNewJoke}
            />
          </div>
        </SidebarLayout>
      </div>
    );
}
