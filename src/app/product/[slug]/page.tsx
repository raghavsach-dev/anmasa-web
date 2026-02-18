import ProductDetails from "@/components/product/ProductDetails";
import { notFound } from "next/navigation";
import { getProductByCode } from "@/app/services/products-service";



export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("inside ProductDetailPage", slug);

  const product = await getProductByCode(slug);

  if (!product) {
    notFound();
    return <div>Product not found</div>;
  }


  return (
    <ProductDetails product={product} />
  );
}