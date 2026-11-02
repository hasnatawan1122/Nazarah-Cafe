# Tohfa Sweets & Nazarah Cafe — Official Website

A production-ready demo website for **Tohfa Sweets & Nazarah Cafe**, a bakery, traditional sweets shop, and contemporary cafe located in **Karkhana Bazar, F Block, Vehari, Punjab, Pakistan**.

---

## 🌟 Features & Highlights

- **Tech Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS + Lucide Icons.
- **Design Tokens & Palette**:
  - Cream Background: `#FFF8EE`
  - Chocolate Brown Typography: `#3B2314`
  - Gold Accent: `#C8913A`
  - Maroon Secondary: `#8C2F39`
  - Crisp White for Cards: `#FFFFFF`
  - Typography: **Playfair Display** (headings) & **Poppins** (body text).
- **Core Pages**:
  - **Home (`/`)**: Hero banner, specialties cards, "Why Choose Us" service highlights, chef-recommended items, verified customer reviews (3.5 rating from 85 reviews), and final call-to-action.
  - **Menu (`/menu`)**: Dynamic category tabs, instant search bar, pricing from authentic menu boards, and expandable "What's Inside / Recipe" disclosure for every dish.
  - **About (`/about`)**: Brand story from Vehari, core values, culinary kitchen details, and service offerings (Dine-in, Drive-through, Delivery).
  - **Gallery (`/gallery`)**: Masonry photo grid with category filters (Sweets, Cakes, Bakery, Cafe Vibe) and interactive full-screen Lightbox with keyboard navigation.
  - **Contact (`/contact`)**: Instant WhatsApp and email contact form with client validation, embedded Google Map, store address, opening hours (opens 6:00 AM daily), and phone (+92 323 6475550).
- **Zero Backend Required**: Direct WhatsApp ordering pre-filled with items and contact details. Optional Resend API integration for email dispatch.
- **SEO & Performance Ready**: Dynamic OpenGraph tags, semantic HTML, `sitemap.xml`, `robots.txt`, and branded favicon icon.

---

## 📋 Menu Extraction & Price Verification Notes

The menu was extracted from the original Nazarah Cafe and Tohfa Sweets menu sources. As per requirement, no prices were invented. The following items have been marked with verification flags for the client to confirm with their latest counter board:

| Item Name | Current Listing Price | Status / Verification Note |
| :--- | :--- | :--- |
| **Grand Ramadan Iftar Buffet** | Rs. 1850 | `// TODO verify` exact seasonal per-head buffet rate |
| **Hot Buffalo Wings (6 pcs)** | Rs. 480 | `// TODO verify` exact appetizer price from Nazarah counter board |
| **Crumbed Fried Chicken Fingers**| Rs. 520 | `// TODO verify` exact appetizer price from Nazarah counter board |
| **Fettuccine Alfredo Pasta** | Rs. 750 | `// TODO verify` exact pasta price from Nazarah Cafe menu |
| **Chicken Manchurian Combo** | Rs. 750 | `// TODO verify` exact Chinese combo price |

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js 18.17+ or 20+ installed.

### 2. Installation
```bash
git clone https://github.com/<your-username>/tohfa-sweets.git
cd tohfa-sweets
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Optional variables:
- `NEXT_PUBLIC_SITE_URL`: Your deployed production URL (e.g. `https://tohfa-sweets.vercel.app`)
- `RESEND_API_KEY`: Optional Resend API key to enable email forwarding on `/api/contact`.

### 4. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Production Build & Lint Test
```bash
npm run lint
npm run build
```

---

## 🚢 Deploying to Vercel (Zero-Config)

This repository is optimized for one-click deployment on **Vercel**:

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push your repository to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your `tohfa-sweets` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will run `npm run build` with zero additional configuration needed.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```
For production deployment:
```bash
vercel --prod
```

---

## 📍 Store Information
- **Brand**: Tohfa Sweets & Nazarah Cafe
- **Location**: Karkhana Bazar, F Block, Vehari, Punjab, Pakistan
- **Phone / WhatsApp**: +92 323 6475550
- **Hours**: Opens 6:00 AM Daily (6:00 AM – 11:00 PM)
- **Services**: Dine-In, Drive-Through, City Delivery

