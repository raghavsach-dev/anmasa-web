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
    <div className="grid grid-cols-3 gap-6">
      {subcategories.map((sub) => (
        <div
          key={sub.code}
          className="bg-transparent rounded w-[250px] flex flex-col items-center"
        >
          <div className="relative w-[200px] h-[200px] bg-anmasa-accent mx-auto rounded-lg overflow-hidden">
            <Image
              src={sub.image_url || "/oils4.webp"}
              alt={sub.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-1 text-md text-gray-500 text-center">
            <p className="m-0 whitespace-normal break-words">{sub.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryList;

