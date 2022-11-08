import { Joke } from "src/@joker/models/joke/joke.model";

export interface ISearchResult {
    result: Joke[];
    total: number;
}