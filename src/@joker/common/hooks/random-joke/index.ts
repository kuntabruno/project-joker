import useSWR from 'swr';

import { Joke } from 'src/@joker/models/joke/joke.model';

import { randomJokeApiUrl } from 'src/@joker/common/utils/jokes-api-utils';

const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json());

function useRandomJoke(
  revalidateIfStale: boolean = false,
  revalidateOnFocus: boolean = false,
  revalidateOnReconnect: boolean = false
): { joke?: Joke; isLoading: boolean; isError: boolean } {
  const { data, error } = useSWR(randomJokeApiUrl(), fetcher, {
    revalidateIfStale,
    revalidateOnFocus,
    revalidateOnReconnect,
  });

  return {
    joke: data && data.id ? new Joke(data) : undefined,
    isLoading: !error && !data,
    isError: error
  };
}

export default useRandomJoke;
