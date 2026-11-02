"use client";

import { useState } from "react";
import Image from "next/image";
import { Utensils, MessageCircle, Clock, ChevronDown, BookOpen, X, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";
import { MenuItem } from "@/types/menu";
import { MenuItemVariations } from "@/components/menu/MenuItemVariations";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [imgError, setImgError] = useState(false);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
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
    <>
      <Card className="flex flex-col h-full overflow-hidden p-0 border-[#EEDFCD] hover:border-gold transition-all duration-300">
        {/* Image container with exact responsive height */}
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

          {/* Quick Recipe Preview Pill Button on Image */}
          {(item.recipe || item.ingredients) && (
            <div className="absolute bottom-2.5 right-2.5">
              <button
                type="button"
                onClick={() => setShowRecipeModal(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-chocolate/85 hover:bg-chocolate text-cream backdrop-blur-md px-3 py-1 text-[11px] font-semibold shadow-md transition-all active:scale-95"
                title="Preview recipe and ingredients"
              >
                <BookOpen className="h-3 w-3 text-gold" />
                <span>Recipe Preview</span>
              </button>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-chocolate leading-snug">
              {item.name}
            </h3>
            <div className="text-right flex-shrink-0">
              <span className="inline-block rounded-xl bg-gold/15 px-2.5 py-1 font-body font-bold text-xs sm:text-sm text-gold-dark border border-gold/30">
                {displayPrice}
              </span>
            </div>
          </div>

          {/* Timing info if applicable (e.g. High Tea) */}
          {item.timing && (
            <div className="mb-2 flex items-center gap-1.5 text-xs text-maroon font-semibold">
              <Clock className="h-3.5 w-3.5 flex-shrink-0" />
              <span>{item.timing}</span>
            </div>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-xs sm:text-sm text-chocolate/75 font-body leading-relaxed mb-3 flex-1 line-clamp-2 sm:line-clamp-3">
              {item.description}
            </p>
          )}

          {/* Variations (Sizes & Portions) */}
          {item.variations && item.variations.length > 0 && (
            <MenuItemVariations variations={item.variations} />
          )}

          {/* Recipe & Preparation Expandable Drawer */}
          {(item.recipe || item.ingredients) && (
            <div className="mt-3 pt-2.5 border-t border-[#F0E4D4]">
              <button
                type="button"
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold-dark hover:text-chocolate py-1 transition-colors"
                aria-expanded={isDetailsOpen}
              >
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{isDetailsOpen ? "Hide Recipe Details" : "Preview Recipe & Ingredients"}</span>
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isDetailsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDetailsOpen && (
                <div className="mt-2.5 rounded-xl bg-cream/70 p-3 text-xs text-chocolate/85 border border-[#EEDBCA] space-y-2.5 animate-fadeIn">
                  {item.recipe && (
                    <div>
                      <span className="font-bold text-chocolate block mb-1">
                        How It&apos;s Prepared:
                      </span>
                      <p className="text-chocolate/80 leading-relaxed font-body">
                        {item.recipe}
                      </p>
                    </div>
                  )}

                  {item.ingredients && item.ingredients.length > 0 && (
                    <div>
                      <span className="font-bold text-chocolate block mb-1">
                        Key Ingredients:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.ingredients.map((ing, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-chocolate/80 border border-[#E4D2BF]"
                          >
                            <Check className="h-2.5 w-2.5 text-gold-dark" />
                            <span>{ing}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.itemsIncluded && item.itemsIncluded.length > 0 && (
                    <div>
                      <span className="font-bold text-chocolate block mb-1">
                        Included in Platter:
                      </span>
                      <ul className="space-y-0.5 text-[11px] text-chocolate/75">
                        {item.itemsIncluded.map((included, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-gold"></span>
                            <span>{included}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Action: Order on WhatsApp Button (mobile-optimized 44px min height) */}
          <div className="mt-4 pt-3 border-t border-[#F0E4D4]">
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-full bg-gold text-white px-4 py-3 sm:py-2.5 text-xs font-semibold hover:bg-gold-dark transition-all duration-300 shadow-soft active:scale-98"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </Card>

      {/* POPUP RECIPE PREVIEW MODAL */}
      {showRecipeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-chocolate/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setShowRecipeModal(false)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl bg-cream border border-gold/40 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowRecipeModal(false)}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-chocolate/10 text-chocolate hover:bg-chocolate hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Thumbnail Header in Modal */}
            <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 border border-[#E9DAC8]">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="rounded-md bg-gold px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider mb-1 inline-block">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EEDBCA] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-chocolate/70">
                  Price:
                </span>
                <span className="rounded-xl bg-gold/15 px-3 py-1 font-bold text-sm text-gold-dark border border-gold/30">
                  {displayPrice}
                </span>
              </div>

              {item.recipe && (
                <div>
                  <h4 className="font-heading text-base font-bold text-chocolate mb-1">
                    Artisan Recipe &amp; Method:
                  </h4>
                  <p className="text-xs sm:text-sm text-chocolate/80 font-body leading-relaxed bg-white/70 p-3 rounded-xl border border-[#EEDBCA]">
                    {item.recipe}
                  </p>
                </div>
              )}

              {item.ingredients && item.ingredients.length > 0 && (
                <div>
                  <h4 className="font-heading text-base font-bold text-chocolate mb-1.5">
                    Fresh Ingredients Used:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-chocolate/80 border border-[#E4D2BF] shadow-2xs"
                      >
                        &bull; {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-gold text-white px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-gold-dark transition-all shadow-soft"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order / Inquire for this Recipe</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
