import { Categories } from "@/app/types/categories";
import { getAllCategories } from "@/app/services/category-service";
import Image from "next/image";

export default async function CategoryList() {
  const categories: Categories[] | null = await getAllCategories();
  if (!categories) {
    return null;
  }
  return (
    <div className="grid grid-cols-3 gap-6">
      {categories.map((category) => (
        <div
          key={category.code}
          className="shrink-0  bg-transparent rounded w-[250px] h-[440px] flex flex-col items-center justify-center "
        >
          <div className="relative w-[250px] h-[250px] mx-auto">
            <Image
              src={category.image_url || "/oils4.webp"}
              alt={category.name}
              width={100}
              height={100}
              className="object-cover rounded rounded-lg"
            />
          </div>
          <div className="mt-1 text-md text-gray-500 text-center">
            <p className="m-0">{category.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
