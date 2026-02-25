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
    <div className="flex flex-col gap-6">
      {subcategories.map((sub) => (
        <Link
          key={sub.code}
          href={{
            pathname: `/categoryGrid/${code}`,
            query: { sub: sub.code },
          }}
        >
          <div className="p-2 bg-transparent rounded w-full max-w-md flex flex-col items-center cursor-pointer">
            <div className="mt-2 flex flex-col items-center">
              <div className="relative w-[70px] h-[70px] bg-anmasa-accent rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={sub.image_url || "/oils4.webp"}
                  alt={sub.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-1 text-sm text-gray-500 text-center min-h-[2.5rem] w-[80px]">
                <p className="m-0 leading-tight line-clamp-2  whitespace-normal break-words">
                  {sub.name}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubCategoryList;

