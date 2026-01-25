"use client";
import { useEffect, useState } from "react";

const messages = [
  "Delivery within 90 mins* | Next Day Delivery*",
  "We are live with 10 stores across Gurugram, Noida & Ghaziabad",
  "Discover the finest grains that elevate your kitchen creations",
];

export default function Messagebar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function nextfunc() {
    setIndex((prev) => (prev + 1) % messages.length);
  }

  function prevfunc() {
    setIndex((prev) => (prev - 1) % messages.length);
  }

  return (
    <div className="flex items-center justify-center gap-4 h-10 bg-banner-1">
      <button
        onClick={prevfunc}
        className="absolute left-50 text-text-1 text-xl"
      >
        &lt;
      </button>
      <div>
        <p className="text-text-1 text-sm">{messages[index]}</p>
      </div>
      <button
        onClick={nextfunc}
        className="absolute right-50 text-text-1 text-xl"
      >
        &gt;
      </button>
    </div>
  );
}
