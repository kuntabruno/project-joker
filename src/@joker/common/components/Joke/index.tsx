import { Joke } from 'src/@joker/models/joke/joke.model';

export default function JokeComponent(joke: Joke) {
  if (!joke) return <h1>Joke not found.</h1>;

  return (
    <div className='flex flex-col justify-center'>
      <span className='font-bold text-6xl text-gray-600'>
        &ldquo;{joke.value}&rdquo;
      </span>
    </div>
  );
}
