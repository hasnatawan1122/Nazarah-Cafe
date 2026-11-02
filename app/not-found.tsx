import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Utensils, Home, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center">
      <Container className="text-center max-w-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gold/20 text-gold-dark mb-6 shadow-soft">
          <Utensils className="h-10 w-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-maroon">
          404 &bull; Page Not Found
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-chocolate mt-2 mb-4">
          Looking for Something Sweet?
        </h1>
        <p className="text-base text-chocolate/75 font-body leading-relaxed mb-8">
          The page you are looking for doesn&apos;t seem to exist or may have been moved. Return to our homepage or explore our fresh daily menu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-white shadow-soft hover:bg-gold-dark transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-chocolate px-7 py-3.5 text-sm font-bold text-chocolate hover:bg-chocolate hover:text-cream transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Browse Menu</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}

