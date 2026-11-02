"use client";

import { useState, useMemo } from "react";
import { Search, Sparkles, Filter, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MenuItemCard, MenuItem } from "@/components/ui/MenuItemCard";

interface MenuClientProps {
  initialItems: MenuItem[];
}

export function MenuClient({ initialItems }: MenuClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique categories in custom order
  const categories = useMemo(() => {
    const set = new Set<string>();
    initialItems.forEach((i) => set.add(i.category));
    return ["All", ...Array.from(set)];
  }, [initialItems]);

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return initialItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialItems, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md py-4 border-b border-[#EEDFCD] shadow-2xs">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-chocolate/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mithai, burgers, cakes, tea..."
                className="w-full rounded-full border border-[#DDCBB5] bg-white pl-10 pr-4 py-2 text-sm text-chocolate placeholder:text-chocolate/40 focus:border-gold focus:outline-hidden focus:ring-1 focus:ring-gold"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-chocolate/50 hover:text-chocolate"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count pill */}
            <div className="flex items-center gap-2 text-xs text-chocolate/70 font-semibold">
              <Filter className="h-3.5 w-3.5 text-gold-dark" />
              <span>
                Showing {filteredItems.length} of {initialItems.length} items
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const count =
                category === "All"
                  ? initialItems.length
                  : initialItems.filter((i) => i.category === category).length;

              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-maroon text-white shadow-soft"
                      : "bg-white text-chocolate/80 border border-[#E9DAC8] hover:bg-gold/15 hover:text-chocolate"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-cream-dark text-chocolate/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Notice box regarding verified pricing */}
      <Container>
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 text-xs text-chocolate/85 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-chocolate">
              Authentic In-Store Pricing
            </p>
            <p className="mt-0.5 text-chocolate/75">
              Prices reflect our current menu boards in Karkhana Bazar, Vehari. Custom cakes and party catering platters can be tailor-made upon request via WhatsApp.
            </p>
          </div>
        </div>
      </Container>

      {/* Grid of Menu Items */}
      <Container>
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-12 text-center border border-[#EEDFCD] my-12">
            <Sparkles className="mx-auto h-12 w-12 text-gold/40 mb-3" />
            <h3 className="font-heading text-xl font-bold text-chocolate">
              No matching treats found
            </h3>
            <p className="mt-1 text-sm text-chocolate/70 font-body">
              Try searching with another keyword or pick a different category tab above.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 rounded-full bg-gold px-5 py-2 text-xs font-bold text-white hover:bg-gold-dark"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
