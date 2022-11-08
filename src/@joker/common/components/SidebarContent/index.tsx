import useCategories from "src/@joker/common/hooks/categories";
import CategoryButtonsList from "../CategoryButtonsList";

export default function SidebarContent() {
    
    const { categories, isLoading, isError } = useCategories();
    
    if (isLoading) return <span className="text-center font-bold text-base text-gray-400">Loading...</span>
    if (isError) return <span className="text-center font-bold text-base text-gray-400">Error Loading Categories</span>

    return (
      <CategoryButtonsList categories={categories}></CategoryButtonsList>    
    );
}