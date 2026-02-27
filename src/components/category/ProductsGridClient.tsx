"use client";

import ItemCard from "@/components/products/ItemCard";
import { Subcategory } from "@/app/types/category";
import { useEffect } from "react";

type ProductsGridClientProps = {
  subcategories: Subcategory[];
};

export default function ProductsGridClient({
  subcategories,
}: ProductsGridClientProps) {
  useEffect(() => {
    const handleScroll = () => {
      const sections =
        document.querySelectorAll<HTMLElement>("[data-sub-code]");
      if (!sections.length) return;

      let activeCode: string | null = null;
      let smallestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - 150);
        const code = section.dataset.subCode;

        if (code && distance < smallestDistance) {
          smallestDistance = distance;
          activeCode = code;
        }
      });

      if (activeCode) {
        window.dispatchEvent(
          new CustomEvent("activeSubcategoryChange", {
            detail: { code: activeCode },
          }),
        );
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[100vh] rounded-lg bg-gray-50">
      {subcategories.map((sub) => {
        const subProducts = sub.products ?? [];
        if (subProducts.length === 0) return null;

        return (
          <section
            key={sub.code}
            id={`sub-${sub.code}`}
            data-sub-code={sub.code}
            className="mb-6"
          >
            <h3 className="mb-2 text-base font-semibold text-gray-600">
              {sub.name}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              {subProducts.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
