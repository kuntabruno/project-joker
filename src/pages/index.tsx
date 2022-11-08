import { SWRConfig } from 'swr';

import {
  categoriesUrl,
  getJokesCategoriesFromApi,
} from 'src/@joker/common/utils';
import useCategories from 'src/@joker/common/hooks/categories';

import { TitleBar, CategoriesCardsGrid } from 'src/@joker/modules/Home';
import DocHead from 'src/@joker/common/components/DocHead';

export async function getStaticProps() {
  const categories = await getJokesCategoriesFromApi();
  return {
    props: {
      fallback: {
        [categoriesUrl()]: categories,
      },
    },
  };
}

const HomePage: any = ({ fallback }: { fallback: any }) => {
  const { categories, isLoading, isError } = useCategories();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  return (
    <div>
      <DocHead title="Pick a Category - Home Page" description="Pick a category to view a joke in category"/>
      <div className="px-6">
        <TitleBar />
        <SWRConfig value={{ fallback }}>
          <div className="flex flex-row items-start justify-center sm:mx-20 mx-1">
            <CategoriesCardsGrid categories={categories} />
          </div>
        </SWRConfig>
      </div>
    </div>
  );
};

export default HomePage;
