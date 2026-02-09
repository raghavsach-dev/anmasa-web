import Image from "next/image";
import Link from "next/link";

type PopupProps = {
  image: string;
  title: string;
  oldPrice?: string;
  price?: string;
  variants?: { vn: string; sp: number; m: number }[];
  selectedVariant?: { vn: string; sp: number; m: number } | null;
  pcs?: string;
  onVariantSelect?: (variant: { vn: string; sp: number; m: number }) => void;
  onClose: () => void;
};


export default function Popup({
  image,
  title,
  oldPrice,
  price,
  variants,
  selectedVariant,
  pcs,
  onVariantSelect,
  onClose,
}: PopupProps) {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-black/40 z-[9999]">
      <div className="bg-white p-6 rounded-lg relative w-[1020px] flex gap-4 h-[620px] border border-gray-500">
        <button
          onClick={onClose}
          className="flex absolute top-2 right-2 text-gray-500 cursor-pointer border-1 border-neutral-400 rounded-4xl p-2 w-10 h-10 justify-center items-center bg-gray-200 font-thin text-3xl"
        >
          ✕
        </button>

        <div className="relative shrink-0 justify-center">
          <div className="flex justify-center">
            <Image
              src={image}
              alt={title}
              width={480}
              height={480}
              className="object-cover rounded"
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p className="flex text-anmasa-heading text-lg">ANMASA</p>
          <p className="font-medium text-4xl mt-4 text-anmasa-accent">{title}</p>

          <div className="flex mt-5">
            {selectedVariant ? (
              <>
                {selectedVariant.m && (
                  <p className="mt-0 line-through text-lg justify-center">
                    Rs. {selectedVariant.m}
                  </p>
                )}
                {selectedVariant.sp && (
                  <p className="mt-0 text-base font-bold text-lg justify-center">
                    &nbsp; &nbsp; Rs. {selectedVariant.sp}
                  </p>
                )}
              </>
            ) : (
              <>
                {oldPrice && (
                  <p className="mt-0 line-through text-lg justify-center">
                    Rs. {oldPrice}
                  </p>
                )}
                {price && ( <p className="mt-0 text-base font-bold text-lg justify-center"> &nbsp; &nbsp; Rs. {price} </p> )}
                </>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500 justify-center">
            Taxes included.
          </p>
          <div className="mt-4">
            <p className="text-sm text-gray-700 font-medium mb-2">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {variants && variants.map((variant, index) => (
                  <button key={index} onClick={() => onVariantSelect?.(variant)} className={`px-3 py-2 border rounded-lg text-sm ${ selectedVariant?.vn === variant.vn ? "bg-anmasa-accent text-anmasa-text border-anmasa-accent" : "border-gray-300 hover:border-anmasa-accent" }`}> {variant.vn}
                  </button>
                ))}
            </div>
          </div>
          <div className="justify-between">
            <button className="w-1/2 mt-55 py-2 border-2 bg-anmasa-accent text-anmasa-text rounded-lg text-center w-116">
                Add to Cart
              </button>
              <br />
              <Link
            href={`/product/${pcs}`}
            className="mt-4 inline-block cursor-pointer hover:underline"
          >
            View full details →
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}