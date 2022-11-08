import Head from 'next/head';
import { ReactElement, Fragment } from 'react';

import useCategories from 'src/@joker/common/hooks/categories';

import { TitleBar, CategoriesCardsGrid } from 'src/@joker/modules/Home';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
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
        <CategoriesCardsGrid categories={categories} />
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Fragment>{page}</Fragment>;
};

export default HomePage;
