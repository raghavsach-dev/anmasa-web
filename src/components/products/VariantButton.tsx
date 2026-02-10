"use client"
import { useState } from "react";

interface VariantButtonProps {
    label: string;
    isSelected: boolean;
    
}

export default function VariantButton({ label, isSelected }: VariantButtonProps) {
  return (
    <> 
      <div className="flex flex-wrap gap-2">
        <button className={`px-3 py-2 border rounded-lg text-sm bg-anmasa-accent text-anmasa-text border-anmasa-accent`} >
          {label}
        </button>
      </div>
    </>
  );
}