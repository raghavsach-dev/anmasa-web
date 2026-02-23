import { Categories } from "@/app/types/categories";
import { getAllCategories } from "@/app/services/category-service";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryList() {
  const categories: Categories[] | null = await getAllCategories();

  if (!categories) {
    return null;
  }
  return (
    <div className="grid grid-cols-3 gap-6 border-2 border-gray-200 overflow-y-auto mt-4 w-[90vw] mx-auto h-[100vh]">
      {categories.map((category) => (
        <Link
          key={category.code}
          href={`/categoryGrid/${category.code}`}
          className="shrink-0 bg-transparent rounded w-[250px] flex flex-col items-center"
        >
          <div className="relative w-[200px] h-[250px] bg-anmasa-accent mx-auto rounded rounded-lg">
            <Image
              src={category.image_url || "/oils4.webp"}
              alt={category.name}
              width={50}
              height={50}
              className="object-cover rounded rounded-lg"
            />
          </div>
          <div className="mt-1 text-md text-gray-500 text-center">
            <p className="m-0 whitespace-normal break-words">{category.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
