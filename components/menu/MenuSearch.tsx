import { Search, X } from "lucide-react";

interface MenuSearchProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  totalResults: number;
}

export function MenuSearch({
  value,
  onChange,
  onClear,
  totalResults,
}: MenuSearchProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full">
      <div className="relative flex-1 max-w-md">
        <label htmlFor="menu-search-input" className="sr-only">
          Search the digital menu
        </label>
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-chocolate/50 pointer-events-none" />
        <input
          id="menu-search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search items, categories, or variations..."
          className="w-full rounded-full border border-[#DDCBB5] bg-white pl-10 pr-10 py-2.5 text-sm text-chocolate placeholder:text-chocolate/40 focus:border-gold focus:outline-hidden focus:ring-1 focus:ring-gold transition-colors"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-chocolate/50 hover:text-chocolate p-1"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="text-xs font-semibold text-chocolate/70 self-center sm:self-auto">
        Showing <span className="text-maroon font-bold">{totalResults}</span> items
      </div>
    </div>
  );
}

