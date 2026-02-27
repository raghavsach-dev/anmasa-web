import { getProductsAndSubcategoryByCategoryCode } from "@/app/services/products-and-subcategory-service";
import ProductsGridClient from "./ProductsGridClient";

type ProductsGridProps = {
  categoryCode: string;
  selectedSubcategoryCode?: string;
};

export default async function ProductsGrid({
  categoryCode,
}: ProductsGridProps) {
  const data = await getProductsAndSubcategoryByCategoryCode(categoryCode);

  if (!data) {
    return (
      <div className="mt-4 text-center text-sm text-gray-500">
        No products found for this category.
      </div>
    );
  }

  const { products, subcategories } = data;

  if (!subcategories || subcategories.length === 0) {
    return (
      <div className="mt-4 text-center text-sm text-gray-500">
        No products found for this subcategory.
      </div>
    );
  }

  const hasAnyProducts =
    subcategories.some((sub) => sub.products && sub.products.length > 0) ||
    (products && products.length > 0);

  if (!hasAnyProducts) {
    return (
      <div className="mt-4 text-center text-sm text-gray-500">
        No products found for this subcategory.
      </div>
    );
  }

  return <ProductsGridClient subcategories={subcategories} />;
}
