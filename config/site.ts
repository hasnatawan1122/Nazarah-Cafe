export const siteConfig = {
  name: "Tohfa Sweets & Nazarah Cafe",
  shortName: "Tohfa Sweets",
  description:
    "Tohfa Sweets & Nazarah Cafe — Vehari's favourite destination for fresh mithai, artisan cakes, bakery items, and cafe delights. Dine-in, drive-through & delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tohfa-sweets.vercel.app",
  phone: "+92 323 6475550",
  phoneRaw: "+923236475550",
  whatsappUrl: "https://wa.me/923236475550",
  email: "tohfasweets.vehari@gmail.com",
  address: "Karkhana Bazar, F Block, Vehari, Punjab, Pakistan",
  openingHours: "6:00 AM – 11:00 PM, Daily",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d72.3489!3d30.0451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKarkhana+Bazar+F+Block+Vehari!5e0!3m2!1sen!2spk!4v1700000000000",
  social: {
    facebook: "https://facebook.com/tohfasweets",
    instagram: "https://instagram.com/tohfasweets",
    tiktok: "https://tiktok.com/@tohfasweets",
  },
  rating: 3.5,
  reviewCount: 85,
} as const;

export type SiteConfig = typeof siteConfig;

