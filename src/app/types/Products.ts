export type Product = {
  id: number;
  img: string;
  n: string;
  pc: string;
  v: Variant[];
};

export type Variant = {
  id: string;
  ic: string;
  sp: number;
  m: number;
  uom: string;
  measure: string;
  vn: string;
};

export type Item = {
  id: string;
  n: string;
  sd: string;
  oos: boolean;
  v: ItemVariant[];
  media: Media[];
  related: Related[];
};

export type Related = {
  id: string;
  nn: string;
  pc: string;
  img: string;
  sp: number;
  m: number;
};

export type Media = {
  URL: string;
  type: string;
};

export type ItemVariant = {
  id: string;
  vn: string;
  sp: number;
  m: number;
};

// Keep default export for existing imports
export default Product;