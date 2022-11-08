import { useRouter } from 'next/router';

import useCategories from 'src/@joker/common/hooks/categories';

import ValidJokeComponent from 'src/@joker/modules/Jokes/components/ValidJokeComponent';

import { ICategoryButtonProps } from 'src/@joker/interfaces/category-button/category-button-props.interface';

import JokeDetailDefinedErrorComponent from 'src/@joker/modules/Jokes/components/JokeDetailDefinedErrorComponent';

export default function RandomJokeInCategoryPage() {
  const router = useRouter();
  const {
    categories,
    isError,
    isLoading: isCategoriesLoading,
  } = useCategories();

  const { category: queryCategory } = router.query;

  if (typeof queryCategory !== 'string')
    return (
        <JokeDetailDefinedErrorComponent
          headTitle="Unsupported Parameter"
          headDescription="Error Occurred"
          errorMessage="Unsupported Parameter, please contact support"
        ></JokeDetailDefinedErrorComponent>
    );

  function isCategoryValid(
    categories: ICategoryButtonProps[],
    categoryName: string
  ): boolean {
    return categories.findIndex(
      (category) =>
        category &&
        category.name &&
        categoryName &&
        categoryName === category.name
    ) === -1
      ? false
      : true;
  }

  if (isCategoriesLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error</h1>;

  if (!isCategoryValid(categories, queryCategory)) {
    return (
        <JokeDetailDefinedErrorComponent
          headTitle={`${queryCategory} Joke`}
          headDescription={`View ${queryCategory} joke`}
          errorMessage={`Invalid Category. The category provided${queryCategory ? `, '${queryCategory}'` : ''} is not a supported Jokes category`}
        ></JokeDetailDefinedErrorComponent>
    );
  }

  return (
      <ValidJokeComponent category={queryCategory}></ValidJokeComponent>
  );
}
