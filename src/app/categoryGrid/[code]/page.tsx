import { getAllCategories } from "@/app/services/category-service";
import { Categories } from "@/app/types/categories";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const categories: Categories[] | null = await getAllCategories();
  const category = categories?.find((c) => c.code === code);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-anmasa-bg w-[100vw] min-h-screen py-6">
      <div className="w-[90vw] mx-auto border-2 border-gray-200 rounded-lg p-4">
        <div className="flex gap-4 items-center">
          <div className="relative w-[120px] h-[120px] bg-anmasa-accent rounded-lg overflow-hidden">
            <Image
              src={category.image_url || "/oils4.webp"}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-800">
              {category.name}
            </div>
          </div>
        </div>

        <div className="mt-6">
          {category.subcategories?.length ? (
            <div className="grid grid-cols-3 gap-6">
              {category.subcategories.map((sub) => (
                <div
                  key={sub.code}
                  className="bg-transparent rounded w-[250px] flex flex-col items-center"
                >
                  <div className="relative w-[200px] h-[200px] bg-anmasa-accent mx-auto rounded-lg overflow-hidden">
                    <Image
                      src={sub.image_url || "/oils4.webp"}
                      alt={sub.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-1 text-md text-gray-500 text-center">
                    <p className="m-0 whitespace-normal break-words">
                      {sub.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-500">
              No subcategories found for this category.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
