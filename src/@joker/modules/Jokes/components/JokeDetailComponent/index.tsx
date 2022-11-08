import { Fragment } from "react";
import BackToHomeButton from "src/@joker/common/components/BackToHomeButton";

import JokeComponent from "../Joke";
import LoadNewJokeButton from "../LoadNewJokeButton";

import { Joke } from "src/@joker/models/joke/joke.model";

export default function JokeDetailComponent({ joke, handleLoadNewJoke }: { joke: Joke, handleLoadNewJoke: () => void }) {
   
    return (
      <Fragment>
          <div className='flex flex-col px-6 relative h-full'>
              <BackToHomeButton></BackToHomeButton>
              <div className='flex flex-row items-start justify-center w-full px-6'>
                {
                  <JokeComponent
                    id={joke.id}
                    url={joke.url}
                    value={joke.value}
                    icon_url={joke.icon_url}
                    created_at={joke.created_at}
                    updated_at={joke.updated_at}
                    categories={joke.categories}
                  ></JokeComponent>
                }
              </div>
              <LoadNewJokeButton
                handleLoadNewJoke={handleLoadNewJoke}
                buttonText='Load New Joke'
              ></LoadNewJokeButton>
            </div>
      </Fragment>
    );
}