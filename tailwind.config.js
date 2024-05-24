/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1E9DFC",
          dark: "#4C80A7",
        },
        brown: {
          default: "#BD8D46",
          dark: "#7D6A4D",
        },
        orange: "#FCA41E",
        gray: "#414B52",
        black: {
          DEFAULT: "#000000",
          1: "#1d1d1d",
        },
      },
      fontFamily: {
        "roboto-mono": ['"Roboto Mono"', "monospace"],
        urbanist: ['"Urbanist"', "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
