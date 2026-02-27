"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Subcategory } from "@/app/types/category";

type SubCategoryListCardProps = {
  code: string;
  subcategories: Subcategory[];
  defaultSelectedCode: string;
};

export default function SubCategoryListCard({
  code,
  subcategories,
  defaultSelectedCode,
}: SubCategoryListCardProps) {
  const [selectedCode, setSelectedCode] = useState(defaultSelectedCode);

  useEffect(() => {
    setSelectedCode(defaultSelectedCode);
  }, [defaultSelectedCode]);

  return (
    <div className="flex w-44 flex-col gap-1 overflow-y-auto py-2">
      {subcategories.map((sub) => {
        const isActive = selectedCode === sub.code;
        return (
          <Link
            key={sub.code}
            href={`/categoryGrid/${code}#sub-${sub.code}`}
            className="block"
            onClick={() => setSelectedCode(sub.code)}
          >
            <div
              className={`flex items-center gap-3 px-2 py-2 cursor-pointer rounded-lg transition-colors ${
                isActive
                  ? "bg-green-800 text-white"
                  : "text-gray-700 hover:bg-green-800/50"
              }`}
            >
              <div
                className={`h-8 w-1 rounded-r-full ${
                  isActive ? "bg-white" : "bg-transparent"
                }`}
              />
              <div className="relative h-15 w-15 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={sub.image_url || "/oils4.webp"}
                  alt={sub.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm leading-tight line-clamp-2 whitespace-normal break-words">
                {sub.name}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
