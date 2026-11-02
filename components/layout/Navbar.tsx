"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-soft border-b border-[#EEDFCD]"
          : "bg-cream border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-white shadow-soft group-hover:bg-gold-dark transition-colors">
              <span className="font-heading text-2xl font-bold">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-chocolate leading-tight">
                Tohfa Sweets
              </span>
              <span className="text-[11px] font-medium tracking-widest text-maroon uppercase">
                &amp; Nazarah Cafe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-maroon bg-gold/15 font-bold"
                      : "text-chocolate/80 hover:text-chocolate hover:bg-gold/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Order Now (WhatsApp) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Tohfa Sweets & Nazarah Cafe, I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-gold-dark hover:shadow-md transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-chocolate hover:bg-gold/15 focus:outline-hidden"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden border-b border-[#EEDFCD] bg-cream px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-gold text-white font-bold"
                    : "text-chocolate hover:bg-gold/15"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3">
            <a
              href={`https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Tohfa Sweets & Nazarah Cafe, I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-gold-dark"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Order Now via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
