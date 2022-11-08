import { Category } from 'src/@joker/models/category/category.model';
import { categoriesUrl } from '../jokes-api-utils';

export async function getJokesCategoriesFromApi(): Promise<string[]> {
    const res = await fetch(categoriesUrl());
    return res.json();
}


export async function transformDataIntoJokesCategories(data: string[]): Promise<Category[]> {
    return new Promise<Category[]>(async (resolve) => {
        if (!data || !data.length) {
            resolve([]);
        }

        const categoroiesToResolve: Promise<Category>[] = data.map((categoryName, index) => {
            return new Promise<Category>((res) => {
                res(new Category({ name: categoryName, id: `index`, url: `` }))
            });
        });

        resolve(await Promise.all(categoroiesToResolve));
    });
}