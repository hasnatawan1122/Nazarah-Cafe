import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#F7EBD9] via-cream to-cream py-16 sm:py-24 border-b border-[#EEDFCD]">
      {/* Subtle decorative background circles */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-96 w-96 rounded-full bg-maroon/10 blur-3xl" />

      <Container className="relative text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-chocolate/60 font-body"
          >
            {breadcrumbs.map((item, index) => (
              <span key={index} className="inline-flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gold font-medium">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="mx-1 h-3 w-3 text-chocolate/40" />
                )}
              </span>
            ))}
            <span className="inline-flex items-center">
              <ChevronRight className="mx-1 h-3 w-3 text-chocolate/40" />
              <span className="text-gold font-medium">{title}</span>
            </span>
          </nav>
        )}

        {badge && (
          <span className="mb-4 inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark border border-gold/30">
            {badge}
          </span>
        )}

        <h1 className="font-heading text-4xl font-bold tracking-tight text-chocolate sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-chocolate/75 font-body leading-relaxed">
          {subtitle}
        </p>
      </Container>
    </div>
  );
}

