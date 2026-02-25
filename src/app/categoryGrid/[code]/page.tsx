import { getAllCategories } from "@/app/services/category-service";
import { Categories } from "@/app/types/categories";
import ProductsGrid from "@/components/category/ProductsGrid";
import SubCategoryList from "@/components/category/SubCategoryList";
import { notFound } from "next/navigation";

export default async function CategoryDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ sub?: string }>;
}) {
  const { code } = await params;
  const { sub: selectedSubcategoryCode } = await searchParams;
  const categories: Categories[] | null = await getAllCategories();
  const category = categories?.find((c) => c.code === code);
  console.log("category", category);
  if (!category) {
    notFound();
  }

  return (
    <div className="px-4 py-6 h-[100vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="mx-auto flex max-w-6xl gap-6 h-[100vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto">
        <div className="border border-gray-200 rounded-lg w-[200px] shrink-0 p-2 h-[100vh]">
          <SubCategoryList
            code={code}
            selectedSubcategoryCode={selectedSubcategoryCode}
          />
        </div>
        <div className="border border-gray-200 rounded-lg w-full h-[100vh] p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto">
          <ProductsGrid
            categoryCode={code}
            subcategoryCode={selectedSubcategoryCode}
            categoryName={category.name}
          />
        </div>
      </div>
    </div>
  );
}
