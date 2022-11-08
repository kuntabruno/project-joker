import Link from 'next/link';
import SearchForm from "../Search/SearchForm";
import styles from './Header.module.scss';

export default function Header() {
    return (
       <div className={`bg-white px-1 sm:px-8 w-full header py-4 ${styles.header}`}>

            <div className="flex flex-row items-start justify-center">

                     <div className="logo sm:w-2/12 flex flex-row justify-center">
                     <Link href="/">
                        <span className="hover:bg-gray-200 rounded-lg p-2 transition duration-150 ease-in-out">
                          <span className="text-lg font-bold">Project Joker</span>
                        </span>
                     </Link>
                     </div>

                     <div className="sm:w-8/12">
                        <div className="flex flex-row items-start w-full"> 
                           <div className="sm:ml-36">
                              <SearchForm/>
                           </div>
                        </div>
                     </div>

                     <div className="sm:w-2/12">
                     </div>

            </div>

       </div>
    );
}