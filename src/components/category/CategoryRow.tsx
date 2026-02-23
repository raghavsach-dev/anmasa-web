import { Categories } from "@/app/types/categories";
import { getAllCategories } from "@/app/services/category-service";
import CategoryCard from "./CategoryCard";
import Link from "next/link";

export default async function CategoryRow() {
  const categories: Categories[] | null = await getAllCategories();
  if (!categories) {
    return null;
  }
  return (
    <>
      <div className="flex overflow-x-auto no-scrollbar mt-4 gap-6 whitespace-nowrap">
        {categories.map((category) => (
          <CategoryCard key={category.code} category={category} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <button className="border rounded-lg border-gray-950 ml-1 mb-4 px-16 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
          <Link href="/categories">View All Categories</Link>
        </button>
      </div>
    </>
  );
}
