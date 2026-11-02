"use client";

import { useState } from "react";
import Image from "next/image";
import { Utensils, MessageCircle, Clock, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { MenuItem } from "@/types/menu";
import { MenuItemVariations } from "@/components/menu/MenuItemVariations";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Friendly public display for prices
  const displayPrice = item.price
    ? String(item.price)
    : item.variations && item.variations.length > 0
    ? `From ${item.variations[0].price}`
    : "Contact for Price";

  // WhatsApp order link
  const whatsappOrderUrl = `https://wa.me/${siteConfig.phoneRaw.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    `Hello Tohfa Sweets & Nazarah Cafe, I would like to order / inquire about: ${item.name} (${displayPrice}). Please confirm availability.`
  )}`;

  return (
    <Card className="flex flex-col h-full overflow-hidden p-0 border-[#EEDFCD] hover:border-gold transition-all duration-300">
      {/* Image container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-[#F5EAD9] to-[#EBD5BC]">
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
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-gold-dark shadow-inner">
              <Utensils className="h-6 w-6" />
            </div>
            <span className="font-heading text-base font-bold text-chocolate">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] text-chocolate/60 uppercase tracking-widest mt-0.5">
              Fresh Daily Special
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-cream/95 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-chocolate shadow-sm border border-gold/30">
            {item.category}
          </span>
        </div>

        {/* Source image tag (discrete) */}
        {item.sourceImage && (
          <div className="absolute top-3 right-3">
            <span className="rounded-md bg-chocolate/80 backdrop-blur-md px-2 py-0.5 text-[9px] font-medium text-cream/90 uppercase tracking-wider">
              Menu Ref
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-chocolate leading-snug">
            {item.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <span className="inline-block rounded-xl bg-gold/15 px-3 py-1 font-body font-bold text-xs sm:text-sm text-gold-dark border border-gold/30">
              {displayPrice}
            </span>
          </div>
        </div>

        {/* Timing info if applicable (e.g. High Tea) */}
        {item.timing && (
          <div className="mb-2 flex items-center gap-1.5 text-xs text-maroon font-semibold">
            <Clock className="h-3.5 w-3.5" />
            <span>{item.timing}</span>
          </div>
        )}

        {/* Description */}
        {item.description && (
          <p className="text-xs sm:text-sm text-chocolate/75 font-body leading-relaxed mb-3 flex-1">
            {item.description}
          </p>
        )}

        {/* Variations (Sizes & Portions) */}
        {item.variations && item.variations.length > 0 && (
          <MenuItemVariations variations={item.variations} />
        )}

        {/* Expandable Included Items / Details if available (e.g. High Tea) */}
        {item.itemsIncluded && item.itemsIncluded.length > 0 && (
          <div className="mt-3 pt-2 border-t border-[#F0E4D4]">
            <button
              type="button"
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold-dark hover:text-chocolate py-1"
            >
              <span>{isDetailsOpen ? "Hide Included Items" : "View Included Items"}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isDetailsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDetailsOpen && (
              <ul className="mt-2 space-y-1 rounded-xl bg-cream/70 p-3 text-xs text-chocolate/80 border border-[#EEDBCA]">
                {item.itemsIncluded.map((included, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    <span>{included}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Order on WhatsApp Button */}
        <div className="mt-4 pt-3 border-t border-[#F0E4D4]">
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-gold text-white px-4 py-2.5 text-xs font-semibold hover:bg-gold-dark transition-all duration-300 shadow-soft"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Order / Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
