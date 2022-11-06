import Head from 'next/head'
import Image from 'next/image'
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
          
          {/* <div className="flex flex-row flex-start justify-start w-100 h-screen">

               <div className="w-3/12 bg-gray-200 border-r-2 border-indigo-300">
                   
               </div>

              <div className="w-9/12">
                   
              {
                Array.from(categories).map((record: ICategoryButtonProps) => { 
                return ( 
                <h1 key={record.id}>{record.id} { record.name }</h1> 
                )})
            }

              </div>
          </div> */}


          <div className="flex flex-col">
              <span className="font-bold text-2xl mb-10 sm:ml-20 ml-1">Pick a Category</span>
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
