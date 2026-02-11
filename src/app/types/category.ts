import Product from "./products";

export type Category = {
  code: string;
  name: string;
  image_url: string;
  icon_url: string;
  display_order: number;
  subcategories: Subcategory[];
};

export type Subcategory = {
  code: string;
  name: string;
  image_url: string;
  display_order: number;
  products: Product[];
};
