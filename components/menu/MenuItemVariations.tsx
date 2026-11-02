import { MenuItemVariation } from "@/types/menu";

interface MenuItemVariationsProps {
  variations: MenuItemVariation[];
}

export function MenuItemVariations({ variations }: MenuItemVariationsProps) {
  if (!variations || variations.length === 0) return null;

  return (
    <div className="mt-3 pt-2 border-t border-[#F0E4D4]">
      <span className="text-[11px] font-semibold text-chocolate/70 uppercase tracking-wider block mb-1.5">
        Portions &amp; Variations:
      </span>
      <div className="flex flex-wrap gap-1.5">
        {variations.map((v, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 rounded-lg bg-cream-dark px-2.5 py-1 text-xs font-medium text-chocolate border border-[#E4D2BF]"
          >
            <span>{v.name}:</span>
            <span className="font-bold text-maroon">{v.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
