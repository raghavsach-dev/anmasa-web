import { Categories } from "@/app/types/categories";
import { getAllCategories } from "@/app/services/category-service";
import CategoryCard from "./CategoryCard";

export default async function CategoryRow() {
  const categories: Categories[] | null = await getAllCategories();
  if (!categories) {
    return null;
  }
  return (
    <>
      <div className="flex overflow-x-auto no-scrollbar mt-4 gap-6 whitespace-nowrap ml-30">
        {categories.map((category) => (
          <CategoryCard key={category.code} category={category} />
        ))}
      </div>
    </>
  );
}
