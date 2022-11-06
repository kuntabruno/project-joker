import SearchForm from "../Search/SearchForm";
import styles from './Header.module.scss';

export default function Header() {
    return (
       <div className={`bg-white px-1 sm:px-6 w-full header py-4 ${styles.header}`}>

            <div className="flex flex-row items-start justify-center">

                     <div className="logo w-1/5 flex flex-row justify-center">
                        <span className="hover:bg-gray-200">Project Joker</span>
                     </div>

                     <div className="w-3/5 flex flex-row items-start justify-start">
                        <SearchForm/>
                     </div>

            </div>

       </div>
    );
}