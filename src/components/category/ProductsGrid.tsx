import { Product } from "@/app/types/Products";
import { getProductsBySubcategoryCode } from "@/app/services/subcategory-service";
import ProductCard from "@/components/products/ProductCard";

type ProductsGridProps = {
  subcategoryCode: string;
};

export default async function ProductsGrid({
  subcategoryCode,
}: ProductsGridProps) {
  const products: Product[] | null =
    await getProductsBySubcategoryCode(subcategoryCode);

  if (!products || products.length === 0) {
    return (
      <div className="mt-4 text-center text-sm text-gray-500">
        No products found for this subcategory.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6 border-2 border-gray-200 overflow-y-auto mt-4 w-[90vw] mx-auto h-[100vh]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}