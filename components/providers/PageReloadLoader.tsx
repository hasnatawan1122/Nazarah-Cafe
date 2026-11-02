"use client";

import { useEffect, useState } from "react";
import { CoffeeCupLoader } from "@/components/ui/CoffeeCupLoader";

export function PageReloadLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Begin fade-out after the cup finishes filling (~2.4s)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2450);

    // 2. Remove loader completely from DOM under 3 seconds (~2.8s total)
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2850);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Tohfa Sweets & Nazarah Cafe"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream transition-opacity duration-400 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <CoffeeCupLoader
        fullScreen={false}
        title="Tohfa Sweets & Nazarah Cafe"
        subtext="Karkhana Bazar, Vehari"
        size="md"
      />
    </div>
  );
}

