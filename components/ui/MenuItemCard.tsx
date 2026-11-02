"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Utensils, Sparkles, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  ingredients: string[];
  recipe: string;
  image?: string;
  featured?: boolean;
  priceNote?: string;
}

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // WhatsApp order link pre-filled with this item
  const whatsappOrderUrl = `https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hello Tohfa Sweets & Nazarah Cafe, I would like to order: ${item.name} (${item.price}). Please confirm availability.`
  )}`;

  return (
    <Card className="flex flex-col h-full overflow-hidden p-0 border-[#EEDFCD] hover:border-gold transition-all duration-300">
      {/* Image container */}
      <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-[#F5EAD9] to-[#EBD5BC]">
        {item.image && !imgError ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FFF5E7] to-[#EEDCC4] p-4 text-center">
            <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold-dark shadow-inner">
              <Utensils className="h-7 w-7" />
            </div>
            <span className="font-heading text-lg font-bold text-chocolate">
              {siteConfig.shortName}
            </span>
            <span className="text-xs text-chocolate/60 uppercase tracking-widest mt-0.5">
              Fresh Daily Special
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-cream/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-chocolate shadow-sm border border-gold/30">
            {item.category}
          </span>
        </div>

        {/* Featured Tag */}
        {item.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-maroon px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
              <Sparkles className="h-3 w-3" /> Special
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-xl font-bold text-chocolate leading-snug">
            {item.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <span className="inline-block rounded-xl bg-gold/15 px-3 py-1 font-body font-bold text-sm text-gold-dark border border-gold/30">
              {item.price}
            </span>
          </div>
        </div>

        <p className="text-sm text-chocolate/75 font-body leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        {/* Expandable Recipe & Ingredients Section */}
        <div className="border-t border-[#F0E4D4] pt-3">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold-dark hover:text-chocolate transition-colors py-1"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Hide Recipe & Details" : "What's Inside / Recipe"}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {isExpanded && (
            <div className="mt-3 rounded-xl bg-cream/70 p-3.5 text-xs text-chocolate/85 border border-[#EEDBCA] animate-fadeIn">
              <div className="mb-2">
                <span className="font-bold text-chocolate block mb-1">Key Ingredients:</span>
                <div className="flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-white px-2 py-0.5 text-[11px] font-medium text-chocolate/80 shadow-2xs border border-[#E9DAC8]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-chocolate block mb-0.5">How It&apos;s Made:</span>
                <p className="text-chocolate/75 leading-relaxed">{item.recipe}</p>
              </div>

              {item.priceNote && (
                <p className="mt-2 text-[10px] text-maroon italic">
                  Note: {item.priceNote}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Order on WhatsApp Button */}
        <div className="mt-4 pt-3 border-t border-[#F0E4D4]">
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-gold text-white px-4 py-2 text-xs font-semibold hover:bg-gold-dark transition-all duration-300 shadow-soft"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Order via WhatsApp</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
