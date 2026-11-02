import { Sparkles } from "lucide-react";

interface MenuEmptyStateProps {
  onReset: () => void;
  query?: string;
}

export function MenuEmptyState({ onReset, query }: MenuEmptyStateProps) {
  return (
    <div className="rounded-3xl bg-white p-12 text-center border border-[#EEDFCD] shadow-soft my-10 max-w-xl mx-auto">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark mb-4">
        <Sparkles className="h-7 w-7" />
      </div>
      <h3 className="font-heading text-2xl font-bold text-chocolate">
        No Matching Items Found
      </h3>
      <p className="mt-2 text-sm text-chocolate/75 font-body leading-relaxed">
        {query ? (
          <>
            We couldn&apos;t find anything matching &ldquo;<strong>{query}</strong>&rdquo; in the selected category.
          </>
        ) : (
          "No items match your current selection."
        )}
      </p>
      <div className="mt-6">
        <button
          type="button"
          onClick={onReset}
          className="rounded-full bg-gold px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-gold-dark transition-colors shadow-soft"
        >
          View Complete Menu
        </button>
      </div>
    </div>
  );
}
