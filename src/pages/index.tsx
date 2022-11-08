import Head from 'next/head';
import { ReactElement, Fragment } from 'react';
import { SWRConfig } from 'swr';

import {
  categoriesUrl,
  getJokesCategoriesFromApi,
} from 'src/@joker/common/utils';
import useCategories from 'src/@joker/common/hooks/categories';

import { TitleBar, CategoriesCardsGrid } from 'src/@joker/modules/Home';

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
      <Head>
        <title>Jokes App | Home</title>
        <meta name='description' content='Jokes App Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='px-8'>
        <TitleBar />
        <SWRConfig value={{ fallback }}>
          <CategoriesCardsGrid categories={categories} />
        </SWRConfig>
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Fragment>{page}</Fragment>;
};

export default HomePage;
