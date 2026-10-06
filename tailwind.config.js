/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5A3A1E",
          light: "#7B5533",
          dark: "#3E2712",
        },
        navy: "#3E2712",
        gold: "#F4C542",
        yellowLight: "#FFD966",
        heading: "#000000",
        bodyText: "#4A4034",
        lightBg: "#FAF6F0",
        warmSurface: "#F5EFE6",
        cardBorder: "#EFE7DB",
        mutedText: "#8A7B6C",
        whatsapp: "#25D366",
        slate: {
          50: "#FAF6F0",
          100: "#F5EFE6",
          200: "#EFE7DB",
          300: "#D8CABE",
          400: "#8A7B6C",
          500: "#706355",
          600: "#4A4034",
          700: "#3E2712",
          800: "#2C1B0C",
          900: "#1A1007",
        },
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        heading: ["'Roboto Slab'", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(62, 39, 18, 0.05)",
        cardHover: "0 20px 40px rgba(90, 58, 30, 0.12)",
      },
    },
  },
  plugins: [],
};
