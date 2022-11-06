import { Joke } from 'src/@joker/models/joke/joke.model';

export default function JokeComponent(joke: Joke) {
    
    if (!joke) return (<h1>Joke Undefined</h1>)

    return (
        <div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2"></h5>
    <p className="text-gray-700 text-base mb-4">
      {joke.value}
    </p>
  </div>
</div>
    )
}