/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          earth:  { 50:'#FCF6E7',100:'#F7E8C4',200:'#EFD28D',300:'#E5BA55',400:'#CD9E30',500:'#B1831F',600:'#986B14',700:'#795410',800:'#5A3F0C',900:'#3E2A08',950:'#2A1C05' },
          maroon: { 50:'#FDECEA',100:'#FBD2CF',200:'#F6A29D',300:'#EF6F68',400:'#E23A31',500:'#C11A10',600:'#9C0C05',700:'#7F0400',800:'#5D0300',900:'#3F0200',950:'#2B0100' },
          bronze: { 50:'#FDF8E6',100:'#FAEFC2',200:'#F4DF89',300:'#ECCF50',400:'#DFBA2E',500:'#CA9D17',600:'#A57D10',700:'#7C5D0C',800:'#523E08',900:'#2B1F04',950:'#1D1502' },
          pollen: { 50:'#FFF9E1',100:'#FFF0B6',200:'#FFE684',300:'#FFDC4F',400:'#FFC91B',500:'#EBB70D',600:'#C09108',700:'#8F6C06',800:'#5F4804',900:'#302502',950:'#221A01' },
          neutral:{ 50:'#FAF8F5',100:'#F1EDE6',200:'#E2DACC',300:'#CDBFA9',400:'#A6957C',500:'#7C6B55',600:'#5A4D3D',700:'#42382C',800:'#2C251D',900:'#191410',950:'#0F0C0A' },
        },
        primary: {
          DEFAULT: "#986B14",
          light: "#B1831F",
          dark: "#3E2A08",
        },
        navy: "#3E2A08",
        gold: "#FFC91B",
        yellowLight: "#FFDC4F",
        heading: "#000000",
        bodyText: "#5A4D3D",
        lightBg: "#FAF8F5",
        warmSurface: "#FAF8F5",
        cardBorder: "#E2DACC",
        mutedText: "#7C6B55",
        whatsapp: "#25D366",
        slate: {
          50: "#FAF8F5",
          100: "#F1EDE6",
          200: "#E2DACC",
          300: "#CDBFA9",
          400: "#A6957C",
          500: "#7C6B55",
          600: "#5A4D3D",
          700: "#3E2A08",
          800: "#2A1C05",
          900: "#0F0C0A",
        },
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        heading: ["'Roboto Slab'", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(62, 42, 8, 0.05)",
        cardHover: "0 20px 40px rgba(152, 107, 20, 0.12)",
      },
    },
  },
  plugins: [],
};
