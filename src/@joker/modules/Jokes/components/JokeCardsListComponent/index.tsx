import { Fragment } from 'react';

import { Joke } from 'src/@joker/models/joke/joke.model';
import JokeCardComponent from '../JokeCardComponent';

import styles from './JokerCardsListComponent.module.scss';

export default function JokeCardsListComponent({
  jokes,
  searchText,
}: {
  jokes: Joke[];
  searchText: string;
}) {
  if (!jokes || !jokes.length) {
    return (
      <div className='flex flex-col justify-center mt-20 mx-4 h-full'>
        <span className='text-center font-semibold text-gray-400 text-2xl'>
          Sorry! No jokes matching {searchText} was found.
        </span>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={`flex flex-col h-full w-full ${styles.cardsListContainer}`}>
        <div className='flex flex-row flex-wrap items-start content-start justify-start pt-8'>
          {jokes.map((joke: Joke) => {
            return (
              <div key={joke.id} className='sm:pr-8 mb-7 w-1/2'>
                <JokeCardComponent joke={joke} />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
