import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Heart,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EEDFCD] bg-[#F7ECDD] text-chocolate/90 pt-16 pb-12">
      <Container>
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Info & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white font-heading text-2xl font-bold shadow-soft group-hover:bg-gold-dark transition-colors">
                T
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-chocolate leading-tight">
                  Tohfa Sweets
                </h3>
                <p className="text-xs font-semibold tracking-wider text-maroon uppercase">
                  &amp; Nazarah Cafe
                </p>
              </div>
            </Link>

            <p className="text-sm text-chocolate/80 font-body leading-relaxed max-w-sm">
              Vehari&apos;s proud landmark for handcrafted desi ghee mithai, morning bakery favorites, custom birthday cakes, and continental cafe dining in Karkhana Bazar.
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold text-chocolate/75">
              <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2.5 py-1 border border-[#E9DAC8]">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-dark" />
                <span>100% Pure Khoya &amp; Desi Ghee</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2.5 py-1 border border-[#E9DAC8]">
                <Sparkles className="h-3.5 w-3.5 text-maroon" />
                <span>Baked Daily at 6 AM</span>
              </span>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-chocolate/70 block mb-2">
                Follow Us Online:
              </span>
              <div className="flex space-x-2.5">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-chocolate/80 shadow-2xs hover:bg-gold hover:text-white transition-all duration-200 border border-[#E8D9C7]"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-chocolate/80 shadow-2xs hover:bg-gold hover:text-white transition-all duration-200 border border-[#E8D9C7]"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-2xs hover:opacity-90 transition-all duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-base font-bold text-chocolate border-b border-[#EEDBCA] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/"
                  className="text-chocolate/75 hover:text-maroon transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-chocolate/75 hover:text-maroon transition-colors"
                >
                  Full Digital Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/menu#ramadan-special-offers"
                  className="text-maroon font-semibold hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  <span>Ramadan Offers</span>
                  <span className="rounded-full bg-maroon/10 px-1.5 py-0.2 text-[10px]">R3</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-chocolate/75 hover:text-maroon transition-colors"
                >
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-chocolate/75 hover:text-maroon transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-chocolate/75 hover:text-maroon transition-colors"
                >
                  Contact &amp; Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-chocolate border-b border-[#EEDBCA] pb-2">
              Menu Specialties
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link
                  href="/menu?category=Traditional Mithai"
                  className="text-chocolate/75 hover:text-gold transition-colors"
                >
                  Traditional Mithai &amp; Khoya
                </Link>
              </li>
              <li>
                <Link
                  href="/menu?category=Artisan Cakes"
                  className="text-chocolate/75 hover:text-gold transition-colors"
                >
                  Birthday &amp; Wedding Cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/menu?category=Bakery Items"
                  className="text-chocolate/75 hover:text-gold transition-colors"
                >
                  Chicken Patties &amp; Cream Rolls
                </Link>
              </li>
              <li>
                <Link
                  href="/menu?category=High-Tea"
                  className="text-chocolate/75 hover:text-gold transition-colors"
                >
                  Nazarah Tiered High-Tea (2 &amp; 3 Pax)
                </Link>
              </li>
              <li>
                <Link
                  href="/menu?category=Delight Pizza"
                  className="text-chocolate/75 hover:text-gold transition-colors"
                >
                  Stone-Baked Delight Pizza
                </Link>
              </li>
              <li>
                <Link
                  href="/menu?category=Korean Boba Drinks"
                  className="text-chocolate/75 hover:text-gold transition-colors"
                >
                  Korean Boba &amp; Special Lassi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location, Hours & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-base font-bold text-chocolate border-b border-[#EEDBCA] pb-2">
              Visit &amp; Order
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body text-chocolate/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-maroon flex-shrink-0 mt-0.5" />
                <div>
                  <p>{siteConfig.address}</p>
                  <a
                    href="https://maps.google.com/?q=Karkhana+Bazar+Vehari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-maroon hover:text-gold font-semibold inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-maroon flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-gold transition-colors font-bold text-chocolate"
                >
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-maroon flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold transition-colors text-xs"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li className="flex items-start gap-2 pt-1 border-t border-[#EEDBCA]">
                <Clock className="h-4 w-4 text-maroon flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-chocolate">Opens 6:00 AM Daily</p>
                  <p className="text-xs text-chocolate/70">Mon – Sun: 6:00 AM – 11:00 PM</p>
                </div>
              </li>
            </ul>

            {/* Service Modes */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-chocolate border border-[#EEDBCA]">
                Dine-In
              </span>
              <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-chocolate border border-[#EEDBCA]">
                Drive-Through
              </span>
              <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-chocolate border border-[#EEDBCA]">
                Home Delivery
              </span>
              <span className="rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-chocolate border border-[#EEDBCA]">
                Event Catering
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit & Copyright */}
        <div className="mt-12 pt-6 border-t border-[#EEDBCA] flex flex-col md:flex-row items-center justify-between text-xs text-chocolate/70 font-body gap-3 text-center md:text-left">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1.5">
            <span>Handcrafted with</span>
            <Heart className="h-3.5 w-3.5 fill-maroon text-maroon" />
            <span>in Vehari, Punjab</span>
          </p>

          <p className="font-medium text-chocolate/80">
            Developed by{" "}
            <a
              href={siteConfig.developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Hasnat's LinkedIn Profile"
              className="font-bold text-chocolate hover:text-gold underline underline-offset-4 decoration-gold hover:decoration-maroon transition-all"
            >
              Hasnat
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
