import Link from "next/link";
import {
  Sparkles,
  ShoppingBag,
  Clock,
  Award,
  UtensilsCrossed,
  Car,
  Truck,
  Star,
  ChevronRight,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { MenuItemCard, MenuItem } from "@/components/ui/MenuItemCard";
import { TestimonialCard, TestimonialItem } from "@/components/ui/Testimonial";
import { siteConfig } from "@/config/site";
import menuData from "@/data/menu.json";
import testimonialsData from "@/data/testimonials.json";

export default function HomePage() {
  const featuredItems = (menuData as MenuItem[]).filter((item) => item.featured).slice(0, 6);
  const reviews = testimonialsData as TestimonialItem[];

  const specialties = [
    {
      title: "Traditional Mithai",
      desc: "Gulab jamun, desi ghee jalebi, kaju barfi & authentic sohan halwa made with pure milk & khoya.",
      icon: "🍬",
      href: "/menu?category=Mithai",
      badge: "Pure Desi Ghee",
    },
    {
      title: "Artisan Cakes",
      desc: "Chocolate truffle, red velvet, fresh pineapple, and customized event celebration cakes.",
      icon: "🎂",
      href: "/menu?category=Cakes",
      badge: "Fresh Daily",
    },
    {
      title: "Bakery Items",
      desc: "Golden chicken patties, crispy cream rolls, samosas, pizza breads, and classic morning rusks.",
      icon: "🥐",
      href: "/menu?category=Bakery Items",
      badge: "Baked 6 AM",
    },
    {
      title: "Fresh Tandoor Bread",
      desc: "Piping hot tandoori naan, sesame roghni naan, and crispy stuffed kulchas straight from the clay coals.",
      icon: "🫓",
      href: "/menu?category=Fresh Bread",
      badge: "Clay Tandoor",
    },
    {
      title: "Nazarah Cafe Food",
      desc: "Gourmet burgers, stone-baked pizzas, Chinese chowmein, Alfredo pasta, and tiered high-tea platters.",
      icon: "☕",
      href: "/menu?category=Fast Food & Pizza",
      badge: "Dine-In & Platter",
    },
    {
      title: "Custom Gift Boxes",
      desc: "Royal velvet packaging for weddings, Eid, and joyful family celebrations in Vehari and beyond.",
      icon: "🎁",
      href: "/menu?category=Gift Boxes",
      badge: "Custom Packaging",
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Fresh Daily from 6:00 AM",
      desc: "Our ovens and tandoor fire up before sunrise to ensure every loaf, pastry, and halwa is freshly prepared every single morning.",
    },
    {
      icon: Award,
      title: "Pure Quality Ingredients",
      desc: "We use only unadulterated milk, pure khoya, fresh dairy butter, and authentic spices with zero artificial fillers or shortcuts.",
    },
    {
      icon: UtensilsCrossed,
      title: "Comfortable Dine-In",
      desc: "Nazarah Cafe offers a relaxing family environment with warm hospitality, perfect for high-tea, lunch, and late evening chai.",
    },
    {
      icon: Car,
      title: "Convenient Drive-Through",
      desc: "On your way to school or work? Grab hot samosas, biscuits, pastries, or fresh doodh patti chai without leaving your car.",
    },
    {
      icon: Truck,
      title: "Fast City-Wide Delivery",
      desc: "Hot food, birthday cakes, and freshly boxed mithai delivered directly to your home across Vehari with careful packaging.",
    },
    {
      icon: HeartHandshake,
      title: "Trusted Vehari Heritage",
      desc: "Rooted in Karkhana Bazar, we are proud to be the heart of sweet celebrations, family gatherings, and tea breaks.",
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6EAD8] via-cream to-cream pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-[#EEDFCD]">
        {/* Decorative background glows */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-maroon/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold tracking-wider text-chocolate border border-gold/30 mb-6">
              <Sparkles className="h-4 w-4 text-gold-dark" />
              <span>Karkhana Bazar, F Block, Vehari</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-chocolate sm:text-6xl lg:text-7xl leading-[1.15]">
              Sweet Moments, Baked Fresh Daily in Vehari
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-chocolate/80 font-body leading-relaxed max-w-2xl mx-auto">
              Welcome to <span className="font-semibold text-chocolate">Tohfa Sweets &amp; Nazarah Cafe</span> — where traditional Pakistani mithai, fresh morning bakes, and contemporary cafe dining come together under one roof.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body font-bold text-sm text-white shadow-soft hover:bg-gold-dark hover:shadow-md transition-all duration-300"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>View Full Menu</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Tohfa Sweets & Nazarah Cafe, I would like to place an order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-chocolate bg-transparent px-8 py-4 font-body font-bold text-sm text-chocolate hover:bg-chocolate hover:text-cream transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order Now via WhatsApp</span>
              </a>
            </div>

            {/* Micro Highlights Pill */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-[#EEDBCA] text-xs font-semibold uppercase tracking-wider text-chocolate/70">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold"></span> Opens 6:00 AM Daily
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold"></span> Dine-In &amp; Drive-Through
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold"></span> Fast Home Delivery
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SPECIALTIES SECTION */}
      <section className="py-4">
        <Container>
          <SectionHeading
            title="Our Crafted Specialties"
            subtitle="From heritage milk sweets to European bakes and fiery karahi, discover what Vehari loves best."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item, idx) => (
              <Card key={idx} className="flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <span className="rounded-full bg-cream-dark px-3 py-1 text-[11px] font-semibold text-maroon border border-gold/30">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-chocolate group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-chocolate/75 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F0E4D4]">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark hover:text-chocolate uppercase tracking-wider transition-colors"
                  >
                    <span>Explore Section</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. FEATURED ITEMS SECTION */}
      <section className="py-8 bg-gradient-to-b from-cream via-[#FBF2E4] to-cream border-y border-[#EEDFCD]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                Chef&apos;s Recommendations
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-chocolate mt-1">
                Featured From Our Menu
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-chocolate px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-chocolate hover:bg-chocolate hover:text-cream transition-colors"
            >
              <span>View All 40+ Items</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-8">
        <Container>
          <SectionHeading
            title="Why Vehari Chooses Us"
            subtitle="Quality you can taste, service you can count on, and warmth that feels like family."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <Card key={idx} className="flex gap-4 p-6 items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-gold-dark shadow-2xs">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-chocolate">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-chocolate/75 font-body leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. TESTIMONIALS & RATING SECTION */}
      <section className="py-12 bg-white/60 border-y border-[#EEDFCD]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold text-chocolate border border-gold/30 mb-3">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span>Customer Satisfaction</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-chocolate">
              Loved by Our Community
            </h2>

            {/* Official 3.5 Rating / 85 Reviews Display */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex items-center space-x-1" aria-label="3.5 stars rating">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
                {/* Half star representation */}
                <div className="relative">
                  <Star className="h-5 w-5 text-[#D8C7B5]" />
                  <span className="absolute top-0 left-0 w-1/2 overflow-hidden">
                    <Star className="h-5 w-5 fill-gold text-gold" />
                  </span>
                </div>
                <Star className="h-5 w-5 text-[#D8C7B5]" />
              </div>
              <span className="font-heading text-xl font-bold text-chocolate">
                {siteConfig.rating}
              </span>
              <span className="text-sm text-chocolate/70 font-body">
                ({siteConfig.reviewCount} Google &amp; Local Reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <TestimonialCard key={rev.id} testimonial={rev} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. FINAL CALL TO ACTION BANNER */}
      <section className="pt-4">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-chocolate via-[#4A2D1B] to-chocolate px-6 py-14 sm:px-12 sm:py-16 text-center text-cream shadow-lg border border-gold/30">
            {/* Background sparkle accents */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gold/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-maroon/30 blur-2xl" />

            <div className="relative mx-auto max-w-2xl space-y-4">
              <span className="inline-block rounded-full bg-gold/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-light border border-gold/40">
                Freshly Prepared Daily
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Planning a Celebration or Craving Fresh Chai &amp; Bakes?
              </h2>
              <p className="text-cream/80 text-sm sm:text-base font-body leading-relaxed">
                Call or WhatsApp us now to reserve your birthday cake, order fresh mithai gift boxes, or have delicious hot food delivered to your doorstep.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    "Hello Tohfa Sweets & Nazarah Cafe, I would like to place an order or inquire about availability."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white shadow-soft hover:bg-gold-dark transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp: {siteConfig.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 bg-transparent px-8 py-3.5 text-sm font-bold text-cream hover:bg-cream hover:text-chocolate transition-all duration-300"
                >
                  <span>Visit Our Shop &amp; Cafe</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
