"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Moon,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import ramadanData from "@/data/ramadan.json";
import { siteConfig } from "@/config/site";

export function RamadanSpecialOffers() {
  const [activeTab, setActiveTab] = useState(0);

  const whatsappReservationUrl = `https://wa.me/${siteConfig.phoneRaw.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hello Tohfa Sweets & Nazarah Cafe, I would like to inquire about reserving a table for the Ramadan Iftar Buffet."
  )}`;

  return (
    <section
      id="ramadan-special-offers"
      className="relative overflow-hidden my-16 rounded-3xl bg-gradient-to-br from-[#12231E] via-[#1B352E] to-[#0E1A17] text-[#FFF6E9] p-6 sm:p-10 lg:p-12 border-2 border-gold/40 shadow-2xl"
    >
      {/* Decorative Golden Lanterns & Crescent Moon SVGs */}
      <div className="pointer-events-none absolute top-4 right-6 text-gold/20">
        <svg
          className="h-28 w-28 sm:h-36 sm:w-36 animate-pulse"
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Crescent Moon */}
          <path d="M48,15 A35,35 0 1 0 85,52 A28,28 0 1 1 48,15 Z" />
          {/* 8-point star */}
          <polygon
            points="65,25 68,32 75,32 70,37 72,44 65,40 58,44 60,37 55,32 62,32"
            fill="#E5BC6E"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold tracking-wider text-gold-light border border-gold/40 mb-3">
            <Moon className="h-3.5 w-3.5 fill-gold-light text-gold-light" />
            <span>Dedicated Seasonal Feature &bull; Source: R3.jpg</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ramadan Special Offers
          </h2>

          <p className="mt-2 text-sm sm:text-base text-[#E5D7C5] font-body leading-relaxed">
            {ramadanData.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-gold-light/90">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{ramadanData.timing}</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>{ramadanData.branch}</span>
            </span>
          </div>
        </div>

        {/* Stations Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-gold/20">
          {ramadanData.sections.map((sec, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex-shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gold text-chocolate shadow-md"
                    : "bg-[#162C26] text-[#E4D5C3] hover:bg-[#203D35] border border-gold/30"
                }`}
              >
                <span>{sec.name}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isSelected ? "bg-chocolate/20 text-chocolate" : "bg-black/30 text-gold-light"
                  }`}
                >
                  {sec.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Station Items Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-[#152B25] p-6 border border-gold/30 shadow-inner">
              <div className="flex items-center justify-between mb-4 border-b border-gold/20 pb-3">
                <h3 className="font-heading text-xl font-bold text-gold-light flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span>{ramadanData.sections[activeTab].name}</span>
                </h3>
                <span className="text-xs text-[#E5D7C5]/70 font-semibold uppercase">
                  Included in 35+ Dish Buffet
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ramadanData.sections[activeTab].items.map((dish, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-[#F7EDE1] font-body bg-[#1E3830]/60 p-2.5 rounded-xl border border-gold/15"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{dish}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reservation Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-gradient-to-b from-[#224239] to-[#172E27] p-6 border-2 border-gold/40 text-center shadow-lg">
              <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-light mb-2">
                Iftar &amp; Dinner Buffet
              </span>
              <h4 className="font-heading text-2xl font-bold text-white mb-2">
                Table Reservations
              </h4>
              <p className="text-xs text-[#E5D7C5] font-body leading-relaxed mb-4">
                {ramadanData.reservationNote}
              </p>

              <div className="rounded-xl bg-black/25 p-3 mb-4 text-xs text-gold-light font-body space-y-1">
                <p className="flex items-center justify-center gap-1.5 font-bold text-sm text-white">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>{siteConfig.phone}</span>
                </p>
                <p className="text-[11px] text-[#D8C7B5]">Daily: Iftar until 08:30 PM</p>
              </div>

              <a
                href={whatsappReservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-chocolate shadow-soft hover:bg-gold-light transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Reserve via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

