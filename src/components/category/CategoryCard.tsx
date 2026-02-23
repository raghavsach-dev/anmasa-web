import { Categories } from "@/app/types/categories";
import Image from "next/image";
export default function CategoryCard({ category }: { category: Categories }) {
  return (
    <div className="shrink-0  bg-transparent rounded w-[250px] h-[440px] flex flex-col items-center justify-center ">
      <div className="relative">
        <Image
          src={category.image_url || "/oils4.webp"}
          alt={category.name}
          width={250}
          height={250}
          className="object-cover mx-auto rounded rounded-lg"
        />
      </div>
      <div className="mt-1 text-md text-gray-500">
        <p className="m-0 text-center">{category.name}</p>
      </div>
    </div>
  );
}
