import { Joke } from 'src/@joker/models/joke/joke.model';

export default function JokeCardComponent({ joke }: { joke: Joke }) {
  if (!joke) {
    return null;
  }
  return (
    <div className='w-full'>
      <div className='block p-6 rounded-lg shadow-lg bg-white border-l-4 border-blue-400'>
        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-2'></h5>
        <p className='text-gray-700 text-lg mb-4 font-medium'>{`${joke.value}`}</p>
      </div>
    </div>
  );
}