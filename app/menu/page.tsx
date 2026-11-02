import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MenuClient } from "./MenuClient";
import menuData from "@/data/menu.json";
import { MenuItem } from "@/components/ui/MenuItemCard";

export const metadata: Metadata = {
  title: "Our Menu | Tohfa Sweets & Nazarah Cafe",
  description:
    "Explore our full menu: traditional mithai, birthday cakes, puff pastries, tandoor naan, high-tea platters, Chinese, burgers, pizza, and specialty chai in Vehari.",
};

export default function MenuPage() {
  const items = menuData as MenuItem[];

  return (
    <div className="pb-24">
      <PageHero
        badge="Fresh Kitchen &amp; Counter"
        title="Our Complete Menu"
        subtitle="Every dish and sweet prepared daily with uncompromised quality, pure ingredients, and timeless Vehari heritage."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />
      <MenuClient initialItems={items} />
    </div>
  );
}
