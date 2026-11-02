"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Coffee,
  Croissant,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Utensils,
  Cake,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MenuItem } from "@/types/menu";
import { MenuItemCard } from "@/components/ui/MenuItemCard";
import { MenuHeader } from "@/components/menu/MenuHeader";
import { MenuSearch } from "@/components/menu/MenuSearch";
import { MenuCategoryNavigation } from "@/components/menu/MenuCategoryNavigation";
import { MenuEmptyState } from "@/components/menu/MenuEmptyState";
import { RamadanSpecialOffers } from "@/components/menu/RamadanSpecialOffers";

const BAKERY_CATEGORIES = new Set([
  "Traditional Mithai",
  "Bakery Items",
  "Artisan Cakes",
  "Gift Boxes",
]);

interface MenuClientProps {
  initialItems: MenuItem[];
}

export function MenuClient({ initialItems }: MenuClientProps) {
  const searchParams = useSearchParams();
  const requestedSection = searchParams.get("section");
  const requestedCategory = searchParams.get("category");

  // By default, display Cafe items as required
  const [activeSection, setActiveSection] = useState<"cafe" | "bakery">("cafe");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Handle URL deep links for section & category
  useEffect(() => {
    if (requestedSection === "bakery") {
      setActiveSection("bakery");
      setSelectedCategory("All");
    } else if (requestedSection === "cafe") {
      setActiveSection("cafe");
      setSelectedCategory("All");
    } else if (requestedCategory && BAKERY_CATEGORIES.has(requestedCategory)) {
      setActiveSection("bakery");
      setSelectedCategory(requestedCategory);
    } else if (requestedCategory) {
      setActiveSection("cafe");
      setSelectedCategory(requestedCategory);
    }
  }, [requestedSection, requestedCategory]);

  // Separate pools
  const { cafePool, bakeryPool } = useMemo(() => {
    const cafe: MenuItem[] = [];
    const bakery: MenuItem[] = [];

    initialItems.forEach((item) => {
      if (item.isRamadanSpecial) return; // Displayed in dedicated section

      if (BAKERY_CATEGORIES.has(item.category)) {
        bakery.push(item);
      } else {
        cafe.push(item);
      }
    });

    return { cafePool: cafe, bakeryPool: bakery };
  }, [initialItems]);

  // Current active pool
  const currentPool = activeSection === "cafe" ? cafePool : bakeryPool;

  // Categories for the active pool only
  const categories = useMemo(() => {
    const set = new Set<string>();
    currentPool.forEach((i) => set.add(i.category));
    return ["All", ...Array.from(set)];
  }, [currentPool]);

  // Category counts for the active pool
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: currentPool.length,
    };
    currentPool.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [currentPool]);

  // Filter items based on active category & search query
  const filteredItems = useMemo(() => {
    return currentPool.filter((item) => {
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

      return (
        matchesCategory &&
        (matchesName || matchesCat || matchesDesc || matchesVariations || matchesIncluded)
      );
    });
  }, [currentPool, selectedCategory, searchQuery]);

  const handleSwitchSection = (section: "cafe" | "bakery") => {
    setActiveSection(section);
    setSelectedCategory("All");
    setSearchQuery("");

    // Smooth scroll to menu anchor on mobile
    const menuEl = document.getElementById("menu-catalog");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-12 pb-24">
      {/* 1. Menu Header */}
      <MenuHeader />

      {/* 2. DEDICATED RAMADAN SPECIAL OFFERS SECTION (Source: R3.jpg) */}
      <Container>
        <RamadanSpecialOffers />
      </Container>

      {/* 3. CATALOG SECTION WITH CAFE / BAKERY SEPARATION */}
      <div id="menu-catalog" className="scroll-mt-24 space-y-8">
        <Container>
          {/* SECTION SWITCHER: Segmented Control & Visual Distinction */}
          <div className="space-y-6">
            {/* Top Switcher Segmented Control */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EEDFCD] pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-maroon flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Choose Your Dining Experience</span>
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-chocolate mt-0.5">
                  {activeSection === "cafe" ? "Nazarah Cafe Menu" : "Tohfa Sweets & Bakery Items"}
                </h2>
              </div>

              {/* Segmented Pill Tabs */}
              <div
                role="tablist"
                aria-label="Menu section switcher"
                className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-[#EEDCC4] border border-[#DFCBB3] w-full sm:w-auto shadow-inner"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSection === "cafe"}
                  onClick={() => handleSwitchSection("cafe")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 min-h-[44px] cursor-pointer ${
                    activeSection === "cafe"
                      ? "bg-chocolate text-cream shadow-md"
                      : "text-chocolate/75 hover:text-chocolate hover:bg-white/40"
                  }`}
                >
                  <Coffee className="h-4 w-4" />
                  <span>Nazarah Cafe</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      activeSection === "cafe"
                        ? "bg-gold text-white"
                        : "bg-white/60 text-chocolate/70"
                    }`}
                  >
                    {cafePool.length}
                  </span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSection === "bakery"}
                  onClick={() => handleSwitchSection("bakery")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 min-h-[44px] cursor-pointer ${
                    activeSection === "bakery"
                      ? "bg-maroon text-cream shadow-md"
                      : "text-chocolate/75 hover:text-chocolate hover:bg-white/40"
                  }`}
                >
                  <Croissant className="h-4 w-4" />
                  <span>Bakery &amp; Sweets</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      activeSection === "bakery"
                        ? "bg-gold text-white"
                        : "bg-white/60 text-chocolate/70"
                    }`}
                  >
                    {bakeryPool.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Distinction Preview Banner & Direct Switch Button */}
            {activeSection === "cafe" ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cream-dark via-[#FBF1E2] to-cream border border-gold/40 shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-gold-dark border border-gold/30">
                    <Cake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-chocolate">
                      Looking for Fresh Mithai, Cakes &amp; Bakery Items?
                    </h3>
                    <p className="text-xs text-chocolate/75 font-body">
                      Showing Nazarah Cafe continental food &amp; drinks. Click to explore traditional sweets, patties &amp; cakes.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSwitchSection("bakery")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-maroon hover:bg-maroon/90 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-soft transition-all duration-200 active:scale-95 min-h-[44px] cursor-pointer"
                >
                  <span>View Bakery Items ({bakeryPool.length})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#F6EDE2] via-[#FBF5EC] to-cream border border-chocolate/20 shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-chocolate/10 text-chocolate border border-chocolate/20">
                    <Utensils className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-chocolate">
                      Craving Cafe Burgers, Stone-Baked Pizza &amp; Sizzlers?
                    </h3>
                    <p className="text-xs text-chocolate/75 font-body">
                      Showing Tohfa Sweets &amp; Bakery counter. Switch back to explore continental cafe dishes &amp; boba.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSwitchSection("cafe")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-chocolate hover:bg-chocolate/90 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-soft transition-all duration-200 active:scale-95 min-h-[44px] cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>View Nazarah Cafe Items ({cafePool.length})</span>
                </button>
              </div>
            )}
          </div>
        </Container>

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

        {/* Current Items Grid */}
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
