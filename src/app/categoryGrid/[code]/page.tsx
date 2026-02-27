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
  console.log("category", category);
  if (!category) {
    notFound();
  }

  return (
    <div className="h-[100vh] bg-gray-50">
      <div className="px-4 py-4 h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto">
        <p className="text-xl sm:text-2xl font-bold mb-4 ml-42">
          Buy <span className="text-green-800">{category.name}</span> Online
        </p>
        <div className="mx-auto flex max-w-6xl gap-6 h-full items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto">
          <div className="border border-gray-200 rounded-xl w-[200px] shrink-0 p-2 bg-white mt-2">
            <SubCategoryList code={code} />
          </div>
          <div className="w-full h-full p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto rounded-lg scroll-smooth">
            <ProductsGrid categoryCode={code} />
          </div>
        </div>
      </div>
    </div>
  );
}