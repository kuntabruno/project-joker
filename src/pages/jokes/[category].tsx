import useRandomJokeInCategory from 'src/@joker/common/hooks/random-joke-in-category';

import DocHead from 'src/@joker/common/components/DocHead';
import JokeComponent from 'src/@joker/common/components/Joke';
import SidebarLayout from 'src/@joker/common/components/SidebarLayout';
import BackToHomeButton from 'src/@joker/common/components/BackToHomeButton';


export default function RandomJokeInCategoryPage({ query }: { query: any }) {

    const { joke, isLoading, isError } = useRandomJokeInCategory(query.category);

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    if (joke)
    return (
      <div>
        <DocHead title={`${query.category} Joke`} description={`View ${query.category} joke`}></DocHead>
        <SidebarLayout>
              <div className="flex flex-col px-6">
              <BackToHomeButton></BackToHomeButton>
                <div className="flex flex-row items-start justify-center w-full px-6">  
                 {  
                 <JokeComponent id={joke.id} url={joke.url} value={joke.value} icon_url={joke.icon_url} created_at={joke.created_at} updated_at={joke.updated_at} categories={joke.categories}></JokeComponent>
                 }
                 </div>
              </div>
        </SidebarLayout>
      </div>
    );
}

RandomJokeInCategoryPage.getInitialProps = ({ query }: { query: any }) => {
    return {query}
  }