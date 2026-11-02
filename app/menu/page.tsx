import { Suspense } from "react";
import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";
import menuData from "@/data/menu.json";
import { MenuItem } from "@/types/menu";

export const metadata: Metadata = {
  title: "Digital Menu | Tohfa Sweets & Nazarah Cafe",
  description:
    "Explore the complete menu of Tohfa Sweets & Nazarah Cafe: High-Tea, Ramadan Iftar Buffet, traditional mithai, cakes, burgers, stone-baked pizzas, and coffee in Vehari.",
};

export default function MenuPage() {
  const items = menuData as MenuItem[];

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream py-24 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent"></div>
          <p className="mt-4 text-sm font-semibold text-chocolate">Loading digital menu...</p>
        </div>
      }
    >
      <MenuClient initialItems={items} />
    </Suspense>
  );
}
