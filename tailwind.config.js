/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geomanist)", ...fontFamily.sans],
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        textprimary: "rgb(var(--color-textprimary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
