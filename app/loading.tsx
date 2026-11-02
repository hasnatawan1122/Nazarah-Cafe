import { CoffeeCupLoader } from "@/components/ui/CoffeeCupLoader";

export default function Loading() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-cream">
      <CoffeeCupLoader
        fullScreen={false}
        text="Brewing Something Special..."
        subtext="Tohfa Sweets & Nazarah Cafe"
        size="lg"
      />
    </div>
  );
}
