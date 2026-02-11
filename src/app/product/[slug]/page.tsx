import VariantButton from "@/components/product/VariantButton";
import { notFound } from "next/navigation";
import { getProductByCode } from "@/app/services/products-service";
import ImageCard from "@/components/product/ImageCard";
import ReactMarkdown from 'react-markdown';
import Quantity from "@/components/product/Quantity";

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


  return (
    <div className="flex flex-row gap-2 p-20 pl-50">
      <ImageCard image1={product.media[0].URL} images={product.media.slice(1).map((media: any) => media.URL)} />
      <div className="flex flex-row gap-2 w-[1000px]">
      <div className="flex flex-col gap-2 w-[500px]">
        <p className="text-anmasa-heading text-lg">ANMASA</p>
        <h1 className="text-4xl text-anmasa-accent">{product.n}</h1>
        <VariantButton variants={product.v} />
        <Quantity outOfStock={product.oos ?? false} />
        <ReactMarkdown components={{
          p: ({ children }) => <p className="text-sm text-gray-500">{children}</p>
        }}>{product.content.description.content}</ReactMarkdown>
      </div>
      </div>
    </div>
  );
}