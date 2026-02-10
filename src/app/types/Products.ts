export type Product = {
  id: number;
  img: string;
  n: string;
  pc: string;
  v: Variant[];
  n1: string;
  n2: string;
  nn: string;
  c: string;
  sc: string;
  b: string;
  sl: string;
  sd: string;
  media: Media[];
  soo: string;
  oos: boolean;
  coarseness: boolean;
  content: ProductContent;
  ql: boolean;
  related: Product[];
  tags: string[];
};

export type ProductContent = {
  health: Content;
  info: Content;
  description: Content;
};

export type Content = {
  content: string;
  content_type: string;
};

export type Variant = {
  id: string;
  pid: string;
  ic: string;
  display_order: number;
  vn: string;
  m: number;
  sp: number;
  oos: boolean;
  d: number;
  measure: number;
  uom: string;
};

export type Media = {
  URL: string;
  type: string;
  alt: string;
};

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
export default Product;
