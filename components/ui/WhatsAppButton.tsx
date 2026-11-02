"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello Tohfa Sweets & Nazarah Cafe, I would like to inquire or place an order."
  )}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover */}
      <span className="mr-3 hidden rounded-full bg-chocolate px-3.5 py-1.5 text-xs font-semibold text-cream shadow-md transition-all duration-300 md:group-hover:inline-block">
        Chat &amp; Order on WhatsApp
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-hidden"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-gold"></span>
        </span>
        <MessageCircle className="h-7 w-7 fill-white" />
      </a>
    </aside>
  );
}
