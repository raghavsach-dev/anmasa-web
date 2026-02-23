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
      <div className="flex overflow-x-auto no-scrollbar mt-4 gap-6 whitespace-nowrap ml-30">
        {categories.map((category) => (
          <CategoryCard key={category.code} category={category} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <button className="border rounded-lg ml-30 mb-4 px-16 py-2 cursor-pointer bg-anmasa-accent text-anmasa-text">
          <Link href="/categoryGrid">View All Categories</Link>
        </button>
      </div>
    </>
  );
}
