"use client";

import { useEffect, useState } from "react";

interface CoffeeCupLoaderProps {
  /**
   * If true, displays the loader as a fixed, full-viewport backdrop.
   * If false, renders as an inline centered component.
   */
  fullScreen?: boolean;
  /**
   * Primary title displayed below the cup.
   * Defaults to "Brewing Something Special..."
   */
  text?: string;
  /**
   * Subtitle / brand slogan displayed below primary title.
   */
  subtext?: string;
  /**
   * Size preset.
   */
  size?: "sm" | "md" | "lg";
  /**
   * Optional extra container classes.
   */
  className?: string;
}

export function CoffeeCupLoader({
  fullScreen = false,
  text = "Brewing Something Special...",
  subtext = "Tohfa Sweets & Nazarah Cafe",
  size = "md",
  className = "",
}: CoffeeCupLoaderProps) {
  // Respect reduced-motion preferences
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const sizeClasses = {
    sm: "w-40 sm:w-48",
    md: "w-56 sm:w-64",
    lg: "w-72 sm:w-80",
  }[size];

  const content = (
    <div
      role="status"
      aria-live="polite"
      aria-label={`${text} ${subtext}`}
      className={`flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
    >
      {/* Container for the SVG Coffee Cup */}
      <div className={`relative ${sizeClasses} aspect-[240/220]`}>
        <svg
          viewBox="0 0 240 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm overflow-visible"
        >
          <defs>
            {/* Soft Ambient Shadow Blur */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.23   0 0 0 0 0.14   0 0 0 0 0.08  0 0 0 0.18 0"
              />
              <feOffset dx="0" dy="6" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>

            {/* Subtle Steam Blur Filter */}
            <filter id="steamBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>

            {/* Ceramic Glaze Linear Gradient for Outer Cup Body */}
            <linearGradient id="ceramicGlaze" x1="68" y1="80" x2="172" y2="176" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#FAF4EA" />
              <stop offset="70%" stopColor="#F1E4D1" />
              <stop offset="100%" stopColor="#E2CFB7" />
            </linearGradient>

            {/* Ceramic Saucer Gradient */}
            <linearGradient id="saucerGlaze" x1="36" y1="175" x2="204" y2="198" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F8EFE3" />
              <stop offset="100%" stopColor="#E5D3BD" />
            </linearGradient>

            {/* Inner Porcelain Rim Gradient */}
            <linearGradient id="innerRimGlaze" x1="120" y1="70" x2="120" y2="92" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DFCEBA" />
              <stop offset="100%" stopColor="#F6ECDF" />
            </linearGradient>

            {/* Rich Espresso Liquid Gradient */}
            <linearGradient id="espressoLiquid" x1="120" y1="80" x2="120" y2="172" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A2814" />
              <stop offset="40%" stopColor="#371D0E" />
              <stop offset="100%" stopColor="#241208" />
            </linearGradient>

            {/* Golden Crema Micro-Foam Top Surface */}
            <radialGradient id="cremaFoam" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0B674" />
              <stop offset="50%" stopColor="#C8913A" />
              <stop offset="90%" stopColor="#8C5325" />
              <stop offset="100%" stopColor="#4A2814" />
            </radialGradient>

            {/* Handle Glaze Gradient */}
            <linearGradient id="handleGlaze" x1="166" y1="92" x2="216" y2="148" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F6ECE0" />
              <stop offset="100%" stopColor="#DFCEBA" />
            </linearGradient>

            {/* STRICT INNER CAVITY CLIPPING PATH: Liquid is 100% contained within the cup */}
            <clipPath id="coffeeCupCavity">
              <path d="M 70 82 C 72 132 90 172 120 172 C 150 172 168 132 170 82 C 170 73 70 73 70 82 Z" />
            </clipPath>
          </defs>

          {/* 1. SAUCER BASE SHADOW & BODY */}
          <g className={prefersReducedMotion ? "" : "animate-cup-appear"}>
            {/* Table Contact Soft Shadow */}
            <ellipse cx="120" cy="198" rx="86" ry="11" fill="rgba(59, 35, 20, 0.14)" />

            {/* Ceramic Saucer Plate */}
            <ellipse cx="120" cy="188" rx="82" ry="14" fill="url(#saucerGlaze)" stroke="#DFCEBA" strokeWidth="1" />
            {/* Inner Saucer Groove */}
            <ellipse cx="120" cy="186" rx="54" ry="7.5" fill="#EBDDCB" opacity="0.65" />
            {/* Saucer Delicate Gold Pinstripe Accent */}
            <ellipse cx="120" cy="188" rx="78" ry="12.5" stroke="#C8913A" strokeWidth="0.8" opacity="0.45" />
          </g>

          {/* 2. CERAMIC HANDLE (Behind cup right side) */}
          <g className={prefersReducedMotion ? "" : "animate-cup-appear"}>
            {/* Outer Handle Ring */}
            <path
              d="M 162 96 C 196 96 215 110 215 125 C 215 140 196 154 162 154 C 154 154 154 142 162 142 C 185 142 199 133 199 125 C 199 117 185 108 162 108 C 154 108 154 96 162 96 Z"
              fill="url(#handleGlaze)"
              stroke="#D8C5AE"
              strokeWidth="1"
            />
            {/* Subtle Handle Highlight */}
            <path
              d="M 166 100 C 192 100 208 112 208 125 C 208 135 194 146 168 148"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          </g>

          {/* 3. CUP INNER CAVITY (Dark back wall before liquid fills) */}
          <g className={prefersReducedMotion ? "" : "animate-cup-appear"}>
            <ellipse cx="120" cy="82" rx="50" ry="12" fill="url(#innerRimGlaze)" stroke="#D8C7B5" strokeWidth="0.8" />
          </g>

          {/* 4. LIQUID FILLING & CREMA SURFACE (Masked strictly inside cup cavity) */}
          <g clipPath="url(#coffeeCupCavity)">
            {/* Animated Rising Liquid Group */}
            <g className={prefersReducedMotion ? "" : "animate-coffee-rise"}>
              {/* Rich Espresso Column */}
              <rect x="60" y="82" width="120" height="110" fill="url(#espressoLiquid)" />

              {/* Dynamic Wave Ripples during fill */}
              <g className={prefersReducedMotion ? "" : "animate-liquid-wave"}>
                <path
                  d="M 50 82 Q 75 77 100 82 T 150 82 T 200 82 V 190 H 50 Z"
                  fill="url(#espressoLiquid)"
                  opacity="0.9"
                />
              </g>

              {/* Crema Top Surface Oval */}
              <ellipse cx="120" cy="82" rx="49" ry="11.5" fill="url(#cremaFoam)" />

              {/* Golden Crema Heart Swirl Accent */}
              <ellipse cx="120" cy="82" rx="36" ry="7.5" fill="#DFB26F" opacity="0.45" />
              <ellipse cx="120" cy="82" rx="22" ry="4.5" fill="#E8C386" opacity="0.6" />

              {/* Post-Fill Surface Ripple (Subtle gentle circular movement) */}
              <ellipse
                cx="120"
                cy="82"
                rx="30"
                ry="6"
                fill="none"
                stroke="#FFE7B8"
                strokeWidth="1.2"
                className={prefersReducedMotion ? "" : "animate-surface-ripple"}
              />
            </g>
          </g>

          {/* 5. CERAMIC CUP OUTER BODY */}
          <g className={prefersReducedMotion ? "" : "animate-cup-appear"}>
            {/* Cup Outer Porcelain Shell */}
            <path
              d="M 68 82 C 70 135 88 176 120 176 C 152 176 170 135 172 82 Z"
              fill="url(#ceramicGlaze)"
              stroke="#D6C4AD"
              strokeWidth="1"
            />

            {/* Porcelain Specular Highlight (Left curvature reflection for 3D depth) */}
            <path
              d="M 76 88 C 77 128 90 166 112 173"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M 83 92 C 84 124 94 156 108 165"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Porcelain Subtle Shadow (Right curvature for cylindrical volume) */}
            <path
              d="M 166 88 C 164 126 150 162 128 173"
              stroke="#D0BC9F"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Gold Lip Rim Pinstripe */}
            <ellipse
              cx="120"
              cy="82"
              rx="52"
              ry="12.5"
              fill="none"
              stroke="#C8913A"
              strokeWidth="1.6"
              opacity="0.9"
            />
            {/* White Glaze Reflection on Rim Lip */}
            <path
              d="M 78 81 C 90 77 114 76 132 78"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.9"
            />
          </g>

          {/* 6. STEAM TRAILS (Naturally rising curves with staggered timing) */}
          {!prefersReducedMotion && (
            <g filter="url(#steamBlur)">
              {/* Steam Trail 1 (Left trail - rising slowly) */}
              <path
                d="M 104 74 C 94 56 110 40 98 22 C 92 12 100 4 96 -6"
                fill="none"
                stroke="rgba(245, 235, 220, 0.75)"
                strokeWidth="2.6"
                strokeLinecap="round"
                className="animate-steam-1"
              />

              {/* Steam Trail 2 (Center trail - taller, elegant sweep) */}
              <path
                d="M 120 70 C 130 50 114 34 124 16 C 128 6 122 -2 125 -14"
                fill="none"
                stroke="rgba(200, 145, 58, 0.55)"
                strokeWidth="3.2"
                strokeLinecap="round"
                className="animate-steam-2"
              />

              {/* Steam Trail 3 (Right trail - subtle curl) */}
              <path
                d="M 136 74 C 146 58 132 42 142 24 C 146 14 140 6 144 -4"
                fill="none"
                stroke="rgba(245, 235, 220, 0.7)"
                strokeWidth="2.4"
                strokeLinecap="round"
                className="animate-steam-3"
              />
            </g>
          )}
        </svg>
      </div>

      {/* STEP 5: COMPLETED STATE TYPOGRAPHY */}
      <div className={`mt-6 space-y-1.5 ${prefersReducedMotion ? "" : "animate-text-reveal"}`}>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-chocolate tracking-tight">
          {text}
        </h3>
        {subtext && (
          <p className="font-body text-xs sm:text-sm font-semibold tracking-widest text-maroon uppercase">
            {subtext}
          </p>
        )}
      </div>

      {/* Subtle Warm Amber Under-Glow */}
      <div className="pointer-events-none absolute -bottom-10 h-28 w-48 rounded-full bg-gold/15 blur-2xl" />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream/95 backdrop-blur-md animate-fadeIn transition-opacity duration-300">
        {content}
      </div>
    );
  }

  return content;
}

