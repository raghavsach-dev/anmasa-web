import Image from "next/image";
import { Subcategory } from "@/app/types/categories";

type SubCategoryListProps = {
  subcategories: Subcategory[] | undefined;
};

const SubCategoryList = ({ subcategories }: SubCategoryListProps) => {
  if (!subcategories || subcategories.length === 0) {
    return (
      <div className="text-sm text-gray-500">
        No subcategories found for this category.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {subcategories.map((sub) => (
        <div
          key={sub.code}
          className="bg-transparent rounded w-full max-w-md flex flex-col items-start"
        >
          <div className="relative w-[70px] h-[70px] bg-anmasa-accent ml-4 mt-2 rounded-lg overflow-hidden">
            <Image
              src={sub.image_url || "/oils4.webp"}
              alt={sub.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-1 text-sm text-gray-500 text-center ml-4">
            <p className="m-0 leading-tight line-clamp-2">{sub.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryList;

