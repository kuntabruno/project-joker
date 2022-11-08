import useSWR from "swr";

import { ICategoryButtonProps } from "@joker/interfaces/category-button/category-button-props.interface";
import { categoriesUrl } from 'src/@joker/common/utils/jokes-api-utils';


const fetcher = (apiUrl: string) => fetch(apiUrl).then(res => res.json());

function useCategories(): { categories: ICategoryButtonProps[], isLoading: boolean, isError: boolean } {
    const { data, error } = useSWR(categoriesUrl(), fetcher)
    return {
      categories: data && data.length ? data.map((item: string, index: number) => { return { id: index, name: item, url: `/jokes/${item}` } }) : [],
      isLoading: !error && !data,
      isError: error
    }
}

export default useCategories;