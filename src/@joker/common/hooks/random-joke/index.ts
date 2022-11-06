import useSWR from "swr";

import { Joke } from 'src/@joker/models/joke/joke.model';

import { randomJokeApiUrl } from 'src/@joker/common/utils/jokes-api-utils';

const fetcher = (apiUrl: string) => fetch(apiUrl).then(res => res.json());

function useRandomJoke(): { joke?: Joke, isLoading: boolean, isError: boolean } {
    const { data, error } = useSWR(randomJokeApiUrl(), fetcher)

    console.log(data);
    return {
      joke: data && data.id ? new Joke(data) : undefined,
      isLoading: !error && !data,
      isError: error
    }
}

export default useRandomJoke;