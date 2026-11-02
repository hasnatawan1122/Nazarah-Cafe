import type { Metadata } from "next";
import Link from "next/link";
import {
  UtensilsCrossed,
  Car,
  Truck,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us & Our Heritage",
  description:
    "Learn about Tohfa Sweets & Nazarah Cafe in Karkhana Bazar, Vehari. Our commitment to pure ingredients, fresh daily baking, and warm community hospitality.",
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "100% Purity & Zero Shortcuts",
      desc: "We never compromise on pure whole milk, unadulterated khoya, real cream, and authentic spices. In our kitchen, tradition is honoured in every recipe.",
    },
    {
      icon: Clock,
      title: "Baked Fresh Daily at 6 AM",
      desc: "Our tandoor and bakery ovens fire up before dawn. When you step into our shop in the morning, the aroma of warm naan and fresh biscuits is genuine.",
    },
    {
      icon: Heart,
      title: "Rooted in Vehari Culture",
      desc: "From wedding celebrations and Eid morning sweets to everyday tea breaks after work, Tohfa Sweets is proud to be part of your most cherished family moments.",
    },
    {
      icon: Sparkles,
      title: "Modern Cafe Experience",
      desc: "With Nazarah Cafe, we expanded beyond traditional mithai into artisan cakes, Korean boba, sizzling continental steaks, and lavish tiered high-tea platters.",
    },
  ];

  const serviceHighlights = [
    {
      icon: UtensilsCrossed,
      title: "Family Dine-In",
      desc: "A warm, welcoming, air-conditioned dining area at Nazarah Cafe where families and friends gather over hot meals, sizzling platters, and steaming doodh patti chai.",
      features: ["Comfortable booth & table seating", "Dedicated family section", "Friendly table service", "Clean & hygienic ambiance"],
    },
    {
      icon: Car,
      title: "Quick Drive-Through",
      desc: "In a hurry? Our convenient drive-through counter lets you order and pick up hot samosas, pastries, birthday cakes, and freshly brewed chai without parking.",
      features: ["Prompt curbside service", "Quick breakfast on-the-go", "Pre-boxed mithai ready to hand over", "Cash & digital payment options"],
    },
    {
      icon: Truck,
      title: "City-Wide Vehari Delivery",
      desc: "Enjoy our restaurant dishes, bakery delights, and custom celebration cakes delivered promptly to your home or office anywhere across Vehari.",
      features: ["Carefully packed tamper-proof boxes", "Hot items kept warm in transit", "WhatsApp direct ordering", "Special event scheduled delivery"],
    },
  ];

  const kitchenHighlights = [
    {
      title: "The Sweet Mastery Kitchen",
      desc: "Where master halwais slow-simmer copper pots of milk and khoya over controlled flames, shaping each gulab jamun, laddu, and barfi with artisan precision.",
    },
    {
      title: "The Artisan Bakery Counter",
      desc: "Our confectionery team frosts fresh three-tier wedding cakes, rolls buttery puff pastry cones, and bakes twice-crisped golden tea rusks daily.",
    },
    {
      title: "The Nazarah Cafe Live Line",
      desc: "From hand-tossing pizza dough to searing steaks and wok-tossing spicy chowmein, our hot kitchen brings international and desi flavours to life.",
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      <PageHero
        badge="Our Heritage &amp; Passion"
        title="Crafting Joy, One Sweet at a Time"
        subtitle="The story of how a passionate local sweets shop grew into Vehari's favourite destination for fresh bakery goods and vibrant cafe dining."
        breadcrumbs={[{ label: "Home", href: "/" }]}
      />

      {/* 1. OUR STORY SECTION */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-maroon uppercase">
                Our Story &amp; Heritage
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-chocolate leading-tight">
                Born in Karkhana Bazar, Baked for Every Celebration
              </h2>
              <p className="text-base sm:text-lg text-chocolate/80 font-body leading-relaxed">
                Tohfa Sweets was founded in the historic heart of Vehari with a single promise: to serve our neighbours authentic mithai made the old-fashioned way — using pure whole milk, unadulterated khoya, real desi ghee, and fragrant spices.
              </p>
              <p className="text-base text-chocolate/75 font-body leading-relaxed">
                Over the years, as our reputation for unmatched quality grew, we listened to our customers and expanded our vision. We introduced an in-house bakery serving fresh morning breads, crunchy tea rusks, and custom celebration cakes.
              </p>
              <p className="text-base text-chocolate/75 font-body leading-relaxed">
                Most recently, we launched <strong>Nazarah Cafe</strong> — a modern, family-friendly dining space where people come together to enjoy continental dishes, stone-baked pizzas, high-tea spreads, and specialty drinks.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-white p-4 border border-[#EEDFCD] shadow-2xs">
                  <span className="font-heading text-3xl font-bold text-maroon block">
                    6:00 AM
                  </span>
                  <span className="text-xs text-chocolate/60 uppercase font-semibold">
                    Fresh Baking Starts Daily
                  </span>
                </div>
                <div className="rounded-2xl bg-white p-4 border border-[#EEDFCD] shadow-2xs">
                  <span className="font-heading text-3xl font-bold text-gold-dark block">
                    40+ Dishes
                  </span>
                  <span className="text-xs text-chocolate/60 uppercase font-semibold">
                    Sweets, Bakes &amp; Cafe Menu
                  </span>
                </div>
                <div className="rounded-2xl bg-white p-4 border border-[#EEDFCD] shadow-2xs">
                  <span className="font-heading text-3xl font-bold text-chocolate block">
                    Vehari
                  </span>
                  <span className="text-xs text-chocolate/60 uppercase font-semibold">
                    Proud Local Heritage
                  </span>
                </div>
              </div>
            </div>

            {/* Visual representation card */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#F5EAD9] via-[#ECDCC8] to-[#DFC8AD] p-8 sm:p-12 border border-[#DFCEBA] shadow-soft">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-chocolate text-cream shadow-md">
                    <span className="font-heading text-3xl font-bold">T</span>
                  </div>
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold-dark border border-gold/30">
                    Est. in Vehari
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-chocolate mb-3">
                  A Promise of Sweet Hospitality
                </h3>
                <p className="text-sm text-chocolate/80 leading-relaxed font-body mb-6">
                  &ldquo;A box of sweets is never just food in our culture. It is an expression of congratulations, an apology mended, a birthday remembered, and a warm greeting to a welcome guest. We treat every sweet like a true tohfa (gift).&rdquo;
                </p>

                <div className="border-t border-chocolate/10 pt-4 flex items-center justify-between text-xs text-chocolate/70">
                  <span className="font-semibold text-chocolate">
                    Tohfa Sweets &amp; Nazarah Cafe Team
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-maroon" /> F Block, Vehari
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. VALUES & MISSION */}
      <section className="py-12 bg-white/70 border-y border-[#EEDFCD]">
        <Container>
          <SectionHeading
            title="Our Values &amp; Standards"
            subtitle="The core principles that guide our bakers, chefs, and counter staff every single day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Card key={idx} className="flex flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-gold-dark mb-4 shadow-2xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-chocolate mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-chocolate/75 font-body leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. SERVICE HIGHLIGHTS (Dine-in, Drive-through, Delivery) */}
      <section className="py-6">
        <Container>
          <SectionHeading
            title="How We Serve Vehari"
            subtitle="Whether dining with family, grabbing a quick morning bite, or ordering to your doorstep, we have you covered."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Card key={idx} className="flex flex-col justify-between p-8">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon/10 text-maroon mb-6">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-chocolate mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-chocolate/80 font-body leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                    <ul className="space-y-2 text-xs font-body text-chocolate/75 border-t border-[#F0E4D4] pt-4">
                      {srv.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. KITCHEN & TEAM SPOTLIGHT */}
      <section className="py-12 bg-gradient-to-b from-cream via-[#F6EAD8] to-cream border-t border-[#EEDFCD]">
        <Container>
          <SectionHeading
            title="Behind the Counters &amp; Stoves"
            subtitle="Meet the culinary passion that turns fresh raw ingredients into your favourite dishes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kitchenHighlights.map((k, idx) => (
              <Card key={idx} className="bg-white/80 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-white font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-chocolate">
                    {k.title}
                  </h3>
                </div>
                <p className="text-sm text-chocolate/75 font-body leading-relaxed">
                  {k.desc}
                </p>
              </Card>
            ))}
          </div>

          {/* Visit CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white shadow-soft hover:bg-gold-dark transition-all duration-300"
            >
              <Users className="h-4 w-4" />
              <span>Visit Us in Karkhana Bazar, Vehari</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
