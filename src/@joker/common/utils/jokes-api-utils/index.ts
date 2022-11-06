export const BASE_API_URL = `https://api.chucknorris.io`;

export const categoriesUrl = () => `${BASE_API_URL}/jokes/categories`;

export const randomJokeApiUrl = () => `${BASE_API_URL}/jokes/random`;

export const randomJokeInCategoryApiUrl = (category?: string) => `${BASE_API_URL}/jokes/random?category=${category}`;