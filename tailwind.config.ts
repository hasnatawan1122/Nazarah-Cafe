import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF8EE",
          dark: "#F5EBD8",
          light: "#FFFDF9",
        },
        chocolate: {
          DEFAULT: "#3B2314",
          light: "#5A3822",
          dark: "#26150B",
        },
        gold: {
          DEFAULT: "#C8913A",
          hover: "#A87830",
          light: "#E5BC6E",
        },
        maroon: {
          DEFAULT: "#8C2F39",
          hover: "#6E242D",
          light: "#B24350",
        },
        cardWhite: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Poppins", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(59, 35, 20, 0.08)",
        hover: "0 10px 25px -3px rgba(59, 35, 20, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

