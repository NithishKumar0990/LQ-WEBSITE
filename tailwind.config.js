/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F7F7',
        surface: '#EEEEEE',
        ink: '#393E46',
        muted: '#929AAB',
        brand: {
          bg: '#F7F7F7',
          surface: '#EEEEEE',
          ink: '#393E46',
          muted: '#929AAB',
        },
        mono: {
          50: '#F7F7F7',
          100: '#EEEEEE',
          200: '#EEEEEE',
          300: '#929AAB',
          400: '#929AAB',
          500: '#929AAB',
          600: '#393E46',
          700: '#393E46',
          800: '#393E46',
          900: '#393E46',
          950: '#393E46',
          black: '#393E46',
          white: '#F7F7F7',
        },
        black: '#393E46',
        white: '#F7F7F7',
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["'Articulat CF'", "articulat-cf", "system-ui", "sans-serif"],
        display: ["'Articulat CF'", "articulat-cf", "system-ui", "sans-serif"],
        heading: ["'Articulat CF'", "articulat-cf", "system-ui", "sans-serif"],
        body: ["'Articulat CF'", "articulat-cf", "system-ui", "sans-serif"],
        serif: ["'iowan-old-style-bt'", "'iowan-old-style-bt-pro'", "'Iowan Old Style'", "'Georgia'", "serif"],
        editorial: ["'iowan-old-style-bt'", "'iowan-old-style-bt-pro'", "'Iowan Old Style'", "'Georgia'", "serif"],
        mono: ["'Roboto Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(57, 62, 70, 0.05)",
        cardHover: "0 20px 40px rgba(57, 62, 70, 0.12)",
        whiteGlow: "0 0 20px rgba(247, 247, 247, 0.25)",
      },
    },
  },
  plugins: [],
};

