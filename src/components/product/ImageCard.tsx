import Image from "next/image";

export default function ImageCard({ image1, images}: { image1: string, images: string[] }) {
  return (
    <div className="flex flex-col gap-2 p-10 pl-20">
    <div className="relative shrink-0 flex">
      <Image src={image1} alt="image" width={580} height={580} className="object-cover rounded" />
    </div>
    <div className="flex gap-2">
      {images.map((image) => (
        <Image key={image} src={image} alt="image" width={240} height={240} className="object-cover rounded" />
      ))}
    </div>
    </div>
  )
}