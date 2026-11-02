"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { MenuItem } from "@/types/menu";
import { MenuItemCard } from "@/components/ui/MenuItemCard";
import { MenuHeader } from "@/components/menu/MenuHeader";
import { MenuSearch } from "@/components/menu/MenuSearch";
import { MenuCategoryNavigation } from "@/components/menu/MenuCategoryNavigation";
import { MenuEmptyState } from "@/components/menu/MenuEmptyState";
import { RamadanSpecialOffers } from "@/components/menu/RamadanSpecialOffers";

interface MenuClientProps {
  initialItems: MenuItem[];
}

export function MenuClient({ initialItems }: MenuClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Separate regular menu items from Ramadan specials as strictly instructed
  const regularItems = useMemo(
    () => initialItems.filter((item) => !item.isRamadanSpecial),
    [initialItems]
  );

  // Extract unique categories from regular menu items only
  const categories = useMemo(() => {
    const set = new Set<string>();
    regularItems.forEach((i) => set.add(i.category));
    return ["All", ...Array.from(set)];
  }, [regularItems]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: regularItems.length,
    };
    regularItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [regularItems]);

  // Filter items based on selected category and search query
  const filteredItems = useMemo(() => {
    return regularItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesName = item.name.toLowerCase().includes(query);
      const matchesCat = item.category.toLowerCase().includes(query);
      const matchesDesc = item.description?.toLowerCase().includes(query) ?? false;
      const matchesVariations =
        item.variations?.some((v) => v.name.toLowerCase().includes(query)) ?? false;
      const matchesIncluded =
        item.itemsIncluded?.some((inc) => inc.toLowerCase().includes(query)) ?? false;

      return matchesCategory && (matchesName || matchesCat || matchesDesc || matchesVariations || matchesIncluded);
    });
  }, [regularItems, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12 pb-24">
      {/* 1. Menu Header */}
      <MenuHeader />

      {/* 2. DEDICATED RAMADAN SPECIAL OFFERS SECTION (Source: R3.jpg) */}
      <Container>
        <RamadanSpecialOffers />
      </Container>

      {/* 3. REGULAR MENU SECTION */}
      <div id="regular-menu" className="scroll-mt-24 space-y-8">
        {/* Sticky Filter & Search Bar */}
        <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md py-4 border-y border-[#EEDFCD] shadow-2xs">
          <Container className="space-y-4">
            <MenuSearch
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery("")}
              totalResults={filteredItems.length}
            />

            <MenuCategoryNavigation
              categories={categories}
              activeCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
          </Container>
        </div>

        {/* Regular Menu Items Grid */}
        <Container>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <MenuEmptyState
              query={searchQuery}
              onReset={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            />
          )}
        </Container>
      </div>
    </div>
  );
}
