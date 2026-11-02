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
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EEDFCD] bg-[#F7ECDD] text-chocolate/90 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white font-heading text-2xl font-bold">
                T
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-chocolate">
                  Tohfa Sweets
                </h3>
                <p className="text-xs font-semibold tracking-wider text-maroon uppercase">
                  &amp; Nazarah Cafe
                </p>
              </div>
            </div>
            <p className="text-sm text-chocolate/75 font-body leading-relaxed">
              Vehari&apos;s proud destination for handcrafted mithai, freshly baked
              specialty cakes, traditional bakery snacks, and our signature Nazarah Cafe dining experience.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-chocolate/80 shadow-2xs hover:bg-gold hover:text-white transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-chocolate/80 shadow-2xs hover:bg-gold hover:text-white transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-chocolate/80 shadow-2xs hover:bg-gold hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-chocolate">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
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
                  Our Full Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-chocolate/75 hover:text-maroon transition-colors"
                >
                  About Us &amp; Heritage
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

          {/* Store Information */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-chocolate">
              Visit &amp; Contact
            </h4>
            <ul className="space-y-3 text-sm font-body text-chocolate/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-maroon flex-shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-maroon flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-gold transition-colors font-medium"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-maroon flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-chocolate">
              Opening Hours
            </h4>
            <div className="rounded-2xl bg-white/70 p-4 border border-[#EEDBCA] space-y-2 text-sm font-body">
              <div className="flex items-center gap-2 text-maroon font-semibold">
                <Clock className="h-4 w-4" />
                <span>Opens 6:00 AM Daily</span>
              </div>
              <p className="text-xs text-chocolate/75">
                Monday – Sunday: 6:00 AM – 11:00 PM
              </p>
              <div className="pt-2 border-t border-[#F0E2D2] flex flex-wrap gap-1.5">
                <span className="rounded-md bg-gold/15 px-2 py-0.5 text-[11px] font-medium text-chocolate">
                  Dine-In
                </span>
                <span className="rounded-md bg-gold/15 px-2 py-0.5 text-[11px] font-medium text-chocolate">
                  Drive-Through
                </span>
                <span className="rounded-md bg-gold/15 px-2 py-0.5 text-[11px] font-medium text-chocolate">
                  Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-6 border-t border-[#EEDBCA] flex flex-col sm:flex-row items-center justify-between text-xs text-chocolate/60 font-body gap-4">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="h-3 w-3 fill-maroon text-maroon" /> in Vehari, Punjab
          </p>
        </div>
      </Container>
    </footer>
  );
}
