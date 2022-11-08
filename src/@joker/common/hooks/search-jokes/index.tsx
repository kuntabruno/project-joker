import useSWR from 'swr';

import { searchJokeApiUrl } from 'src/@joker/common/utils/jokes-api-utils';

import { Joke } from 'src/@joker/models/joke/joke.model';

import { ISearchResult } from 'src/@joker/interfaces/search/search-result.interface';
import { IJoke } from 'src/@joker/interfaces/joke/joke.interface';


const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json());

function useSearchJoke(
  searchText: string,
  revalidateIfStale: boolean = false,
  revalidateOnFocus: boolean = false,
  revalidateOnReconnect: boolean = false
): { result: ISearchResult; isLoading: boolean; isError: boolean } {
  const { data, error } = useSWR(
    searchJokeApiUrl(searchText),
    fetcher,
    { revalidateIfStale, revalidateOnFocus, revalidateOnReconnect }
  );
  const parsedData: ISearchResult = data ? data : { result: [], total: 0 };
  return {
    result: { ...parsedData, result: parsedData.result && parsedData.result.length ? parsedData.result.map((item: IJoke) => new Joke(item)) : []},
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSearchJoke;
