import ValidSearchTextComponent from 'src/@joker/modules/Jokes/components/ValidSearchTextComponent';
import styles from './SearchJokes.module.scss';

export default function JokesSearchPage({ query }: { query: any }) {
  
   console.log(query);
   const { term } = query;
   
   if (!term || term === 'undefined') {
       return (
           <div className="flex flex-col items-center content-center py-6 px-6">
                <span className="text-center font-semibold text-gray-400 text-2xl">Unable to detect Search text</span>
           </div>
       );  
   }

   return (
      <div className={styles.pageSection}>
          <ValidSearchTextComponent searchText={term}/>
      </div>
   )
}

JokesSearchPage.getInitialProps = ({ query }: { query: any }) => {
    return {query}
}