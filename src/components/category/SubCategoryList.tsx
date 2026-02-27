import { getProductsAndSubcategoryByCategoryCode } from "@/app/services/products-and-subcategory-service";
import SubCategoryListCard from "@/components/category/SubCategoryListCard";

type SubCategoryListProps = {
  code: string;
};

const SubCategoryList = async ({ code }: SubCategoryListProps) => {
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

  const defaultSelectedCode = subcategories[0]?.code;

  return (
    <SubCategoryListCard
      code={code}
      subcategories={subcategories}
      defaultSelectedCode={defaultSelectedCode}
    />
  );
};

export default SubCategoryList;
