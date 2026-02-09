"use client";
import { useState } from "react";

interface VariantButtonProps {
    label: string;
    isSelected: boolean;
    onSelect: (variant: any) => void;
}

export default function VariantButton({ label, isSelected, onSelect }: VariantButtonProps) {
  return (
    <> 
      <div className="flex flex-wrap gap-2">
        <button className={`px-3 py-2 border rounded-lg text-sm bg-anmasa-accent text-anmasa-text border-anmasa-accent`} onClick={() => onSelect(label)}>
          {label}
        </button>
      </div>
    </>
  );
}