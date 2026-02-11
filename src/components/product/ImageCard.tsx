import Image from "next/image";

export default function ImageCard({ image }: { image: string }) {
  return (
    <div className="relative shrink-0 flex justify-center w-[480px]">
      <Image src={image} alt="image" width={480} height={480} className="object-cover rounded" />
    </div>
  )
}