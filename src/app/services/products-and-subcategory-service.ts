import { getWithoutAuth } from "./api";
import { Product } from "../types/Products";

type CategoryFullSubcategory = {
  code: string;
  name: string;
  image_url: string;
  display_order: number;
  products: Product[];
};

type CategoryFull = {
  code: string;
  name: string;
  image_url: string;
  icon_url: string;
  display_order: number;
  subcategories: CategoryFullSubcategory[];
};

export async function getProductsAndSubcategoryByCategoryCode(
  categoryCode: string,
): Promise<{ products: Product[]; subcategories: CategoryFullSubcategory[] } | null> {
  const apiURL = `/api/v1/app/categories/${categoryCode}/full`;
  const category = await getWithoutAuth<CategoryFull>(apiURL);

  if (!category) {
    return null;
  }

  const subcategories = category.subcategories ?? [];
  const products = subcategories.flatMap((sub) => sub.products ?? []);

  return { products, subcategories };
}