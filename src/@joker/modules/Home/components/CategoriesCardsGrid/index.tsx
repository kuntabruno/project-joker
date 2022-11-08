import { ICategoryButtonProps } from 'src/@joker/interfaces/category-button/category-button-props.interface';

import CategoryCard from '../CategoryCard';

export default function CategoriesCardsGrid({
  categories,
}: {
  categories: ICategoryButtonProps[];
}) {
  if (!categories || !categories.length) {
    return (
      <span className='text-center font-bold text text-3xl my-8'>
        No Categories to Show
      </span>
    );
  }
  return (
    <div className='flex flex-row flex-wrap items-start content-start justify-start w-100 pt-8'>
      {Array.from(categories).map((record: ICategoryButtonProps) => {
        return (
          <div key={record.id} className='ml-4 mb-7 w-1/5'>
            <CategoryCard
              name={record.name}
              id={record.id}
              url='{record.url}'
            ></CategoryCard>
          </div>
        );
      })}
    </div>
  );
}
