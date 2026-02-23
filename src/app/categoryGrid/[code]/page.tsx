import { getAllCategories } from "@/app/services/category-service";
import { Categories } from "@/app/types/categories";
import ProductsGrid from "@/components/category/ProductsGrid";
import SubCategoryList from "@/components/category/SubCategoryList";
import { notFound } from "next/navigation";

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const categories: Categories[] | null = await getAllCategories();
  const category = categories?.find((c) => c.code === code);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-anmasa-bg w-[100vw] min-h-screen py-6">
      <div className="w-[90vw] mx-auto rounded-lg p-4">
        <div className="mt-6">
          <SubCategoryList subcategories={category.subcategories} />
          <ProductsGrid subcategoryCode={category.subcategories[0].code} />
        </div>
      </div>
    </div>
  );
}
