import { getProductsAndSubcategoryByCategoryCode } from "@/app/services/products-and-subcategory-service";
import ItemCard from "@/components/products/ItemCard";

type ProductsGridProps = {
  categoryCode: string;
  subcategoryCode?: string;
  categoryName: string;
};

export default async function ProductsGrid({
  categoryCode,
  subcategoryCode,
  categoryName,
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
      ? (subcategories.find((sub) => sub.code === subcategoryCode)?.products ??
        [])
      : products;

  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div className="mt-4 text-center text-sm text-gray-500">
        No products found for this subcategory.
      </div>
    );
  }

  return (
    <div className="h-[100vh] rounded-lg bg-gray-50">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {filteredProducts.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
