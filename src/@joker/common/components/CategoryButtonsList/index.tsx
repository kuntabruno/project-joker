import * as React from 'react';
import { ICategoryButtonProps } from 'src/@joker/interfaces/category-button/category-button-props.interface';
import CategoryButton from '../CategoryButton';

export default function CategoryButtonsList({ categories }: { categories: ICategoryButtonProps[]}) {
    
    if (!categories || categories.length === 0) return <span className="text-gray-400 font-bold">No Categories to Show</span>
    return (
       categories.map((category) => {
          return <CategoryButton key={category.id} id={category.id} url={category.url} name={category.name}/>
       })
    );
}