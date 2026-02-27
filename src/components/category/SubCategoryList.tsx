import Image from "next/image";
import { getProductsAndSubcategoryByCategoryCode } from "@/app/services/products-and-subcategory-service";
import Link from "next/link";
type SubCategoryListProps = {
  code: string;
  selectedSubcategoryCode?: string;
};

const SubCategoryList = async ({
  code,
  selectedSubcategoryCode,
}: SubCategoryListProps) => {
  const data = await getProductsAndSubcategoryByCategoryCode(code);
  if (!data) {
    return (
      <div className="text-sm text-gray-500">
        No subcategories found for this category.
      </div>
    );
  }
  const { subcategories } = data;
  if (!subcategories || subcategories.length === 0) {
    return (
      <div className="text-sm text-gray-500">
        No subcategories found for this category.
      </div>
    );
  }

  return (
<div className="flex w-44 flex-col gap-1 overflow-y-auto py-2">
      {subcategories.map((sub) => {
        const isActive = selectedSubcategoryCode === sub.code;
        return (
          <Link
            key={sub.code}
            href={{
              pathname: `/categoryGrid/${code}`,
              query: { sub: sub.code },
            }}
            className="block"
          >
            <div
              className={`flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg transition-colors ${
                isActive
                  ? "bg-green-800 text-white"
                  : "text-gray-700 hover:bg-green-800/50"
              }`}
            >
              <div
                className={`h-8 w-1 rounded-r-full ${
                  isActive ? "bg-white" : "bg-transparent"
                }`}
              />
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={sub.image_url || "/oils4.webp"}
                  alt={sub.name}
                 fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm leading-tight line-clamp-2 whitespace-normal break-words">
                {sub.name}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SubCategoryList;
