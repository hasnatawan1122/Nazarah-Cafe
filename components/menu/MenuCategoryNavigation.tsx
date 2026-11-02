interface MenuCategoryNavigationProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export function MenuCategoryNavigation({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: MenuCategoryNavigationProps) {
  return (
    <nav
      aria-label="Menu categories"
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-none py-1"
    >
      {categories.map((cat) => {
        const isSelected = activeCategory === cat;
        const count = categoryCounts[cat] || 0;

        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`flex-shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              isSelected
                ? "bg-maroon text-white shadow-soft"
                : "bg-white text-chocolate/80 border border-[#E9DAC8] hover:bg-gold/15 hover:text-chocolate"
            }`}
          >
            <span>{cat}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
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
    </nav>
  );
}
