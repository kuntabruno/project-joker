import styles from './LoadNewJokeButton.module.scss';

export function LoadNewJokeButton({
  buttonText = 'Load New',
  handleLoadNewJoke,
}: {
  buttonText: string;
  handleLoadNewJoke: () => void;
}) {
  return (
    <div className={`${styles.loadNewButtonContainer}`}>
      <div className='flex flex-row items-center justify-center w-full'>
        <button className="fixed inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleLoadNewJoke}>{ buttonText }</button>
      </div>
    </div>
  );
}
