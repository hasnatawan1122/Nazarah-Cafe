"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "Sweets" | "Cakes" | "Bakery" | "Cafe Vibe";
}

interface GalleryClientProps {
  items: GalleryItem[];
}

export function GalleryClient({ items }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ["All", "Sweets", "Cakes", "Bakery", "Cafe Vibe"];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showPrev, showNext]);

  return (
    <div className="space-y-10 pb-20">
      {/* Category Filter Tabs */}
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const count =
              cat === "All"
                ? items.length
                : items.filter((i) => i.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-maroon text-white shadow-soft"
                    : "bg-white text-chocolate/80 border border-[#E9DAC8] hover:bg-gold/15 hover:text-chocolate"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isSelected ? "bg-white/20 text-white" : "bg-cream-dark text-chocolate/70"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Container>

      {/* Grid of Gallery Photos */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl bg-[#EEDCC4] border border-[#E9DAC8] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-gold"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback for missing photos
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />

              {/* Branded Fallback behind image */}
              <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF5E8] to-[#EEDCC5] p-4 text-center">
                <Sparkles className="h-8 w-8 text-gold/40 mb-1" />
                <span className="font-heading font-bold text-chocolate text-sm">
                  {item.alt}
                </span>
                <span className="text-[11px] text-maroon font-semibold uppercase tracking-wider mt-1">
                  {item.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-chocolate/90 via-chocolate/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="self-end">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-chocolate shadow-sm">
                    <Eye className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <span className="inline-block rounded-md bg-gold px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-cream line-clamp-2">
                    {item.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* LIGHTBOX MODAL */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-chocolate/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/20 text-cream hover:bg-cream hover:text-chocolate transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/20 text-cream hover:bg-cream hover:text-chocolate transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/20 text-cream hover:bg-cream hover:text-chocolate transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Content container */}
          <div
            className="relative max-h-[85vh] max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[55vh] sm:h-[65vh] w-full overflow-hidden rounded-2xl bg-black/40 border border-cream/20 shadow-2xl">
              <Image
                src={filteredItems[selectedIndex].src}
                alt={filteredItems[selectedIndex].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & WhatsApp inquiry */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full text-cream gap-4 px-2">
              <div>
                <span className="rounded-md bg-gold px-2 py-0.5 text-xs font-bold text-white uppercase tracking-wider mr-2">
                  {filteredItems[selectedIndex].category}
                </span>
                <span className="font-heading text-lg font-bold">
                  {filteredItems[selectedIndex].alt}
                </span>
                <p className="text-xs text-cream/70 font-body mt-0.5">
                  Photo {selectedIndex + 1} of {filteredItems.length}
                </p>
              </div>

              <a
                href={`https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Tohfa Sweets, I saw this in your gallery: ${filteredItems[selectedIndex].alt}. Can I order or inquire about it?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-bold text-white hover:bg-gold-dark transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Inquire About This on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

