import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import CategoryCard from 'src/@joker/common/components/CategoryCard';
import Header from 'src/@joker/common/components/Header';
import useCategories from 'src/@joker/common/hooks/categories';
import { ICategoryButtonProps } from 'src/@joker/interfaces/category-button/category-button-props.interface';
import styles from '../styles/Home.module.css'

export default function HomePage() {

  const { categories, isLoading, isError } = useCategories();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  return (
    <div>
      <Head>
        <title>Jokes App | Home</title>
        <meta name="description" content="Jokes App Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className="px-8">


          <div className="flex flex-col sm:mx-20 mx-1 mt-4">
            <div className="flex flex-row flex-start justify-between">
              <span className="font-bold text-2xl mb-10">Pick a Category</span>
              <Link href="/jokes">Random Joke</Link>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start content-start justify-start w-100 h-screen pt-8">
                  
            {
                Array.from(categories).map((record: ICategoryButtonProps) => { 
                return ( 
                <div key={record.id} className="ml-4 mb-7 w-1/5">
                  <CategoryCard name={record.name} id={record.id} url="{record.url}"></CategoryCard>
                </div> 
                )})
            }

          </div>

      </main>
    </div>
  )
}
