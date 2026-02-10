import VariantButton from "@/components/products/VariantButton";
import { notFound } from "next/navigation";
import { getProductByCode } from "@/app/services/products-service";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log("inside ProductDetailPage", params);
  const { slug } = await params;

  const product = await getProductByCode(slug);

  if (!product) {
    notFound();
    return <div>Product not found</div>;
  }

  // const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const handleVariantSelect = (variant: any) => {
    // setSelectedVariant(variant);
  };
  const variants = product?.v;
  return (
    <div>
      {product.n}
      {variants.map((variant: any) => (
        <VariantButton key={variant.id} label={variant.vn} isSelected={false} />
      ))}
    </div>
  );
}
