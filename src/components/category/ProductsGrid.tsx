    
import { getProductsAndSubcategoryByCategoryCode } from "@/app/services/products-and-subcategory-service";
import ProductCard from "@/components/products/ProductCard";

type ProductsGridProps = {
  categoryCode: string;
  subcategoryCode?: string;
};

export default async function ProductsGrid({
  categoryCode,
  subcategoryCode,
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

  const filteredProducts =
    subcategoryCode && subcategories.length > 0
      ? subcategories.find((sub) => sub.code === subcategoryCode)?.products ??
        []
      : products;

  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div className="mt-4 text-center text-sm text-gray-500">
        No products found for this subcategory.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6 border-2 border-gray-200 overflow-y-auto mt-4 w-[90vw] mx-auto h-[100vh]">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}