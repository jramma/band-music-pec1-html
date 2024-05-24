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
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        'urbanist': ['"Urbanist"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};