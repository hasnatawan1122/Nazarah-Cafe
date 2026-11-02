import { Container } from "@/components/ui/Container";
import { UtensilsCrossed, Sparkles } from "lucide-react";

export function MenuHeader() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#F6EAD8] via-cream to-cream py-16 sm:py-20 border-b border-[#EEDFCD]">
      {/* Decorative ambient blurred shapes */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-maroon/10 blur-3xl" />

      <Container className="relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-chocolate border border-gold/30 mb-4">
          <Sparkles className="h-4 w-4 text-gold-dark" />
          <span>Authentic In-Store &amp; Live Kitchen Menu</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-chocolate leading-tight">
          Our Complete Digital Menu
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-chocolate/80 font-body leading-relaxed">
          From slow-simmered pure milk mithai and breakfast baking to stone-baked pizzas, continental steaks, and tiered high-tea at Nazarah Cafe.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-chocolate/70">
          <span className="flex items-center gap-1.5">
            <UtensilsCrossed className="h-3.5 w-3.5 text-gold-dark" />
            <span>Vehari Branch &bull; Karkhana Bazar</span>
          </span>
          <span>&bull;</span>
          <span>Fresh Daily From 6:00 AM</span>
        </div>
      </Container>
    </div>
  );
}
