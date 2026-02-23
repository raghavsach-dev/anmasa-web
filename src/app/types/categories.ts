export type Categories = {
  code: string;
  name: string;
  image_url: string;
  icon_url: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  code: string;
  name: string;
  image_url: string;
  display_order: number;
  products: Product[];
};

export type Product = {};
