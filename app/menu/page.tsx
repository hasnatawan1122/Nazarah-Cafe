import { Suspense } from "react";
import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";
import { CoffeeCupLoader } from "@/components/ui/CoffeeCupLoader";
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
        <div className="min-h-[70vh] flex items-center justify-center bg-cream">
          <CoffeeCupLoader
            size="md"
            text="Brewing Something Special..."
            subtext="Loading Digital Menu"
          />
        </div>
      }
    >
      <MenuClient initialItems={items} />
    </Suspense>
  );
}
