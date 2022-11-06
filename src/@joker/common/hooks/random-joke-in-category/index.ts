import useSWR from "swr";

import { Joke } from 'src/@joker/models/joke/joke.model';

import { randomJokeInCategoryApiUrl } from 'src/@joker/common/utils/jokes-api-utils';

const fetcher = (apiUrl: string) => fetch(apiUrl).then(res => res.json());

function useRandomJokeInCategory(categoryName?: string): { joke?: Joke, isLoading: boolean, isError: boolean } {
    const { data, error } = useSWR(randomJokeInCategoryApiUrl(categoryName), fetcher)

    return {
        joke: data && data.id ? new Joke(data) : undefined,
        isLoading: !error && !data,
        isError: error
    }
}

export default useRandomJokeInCategory;