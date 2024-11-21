/** @type {import('tailwindcss').Config} */
import palette from "./src/ui/theme/palette"

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...palette
      },
    },
    fontFamily: {
      primary: ["Onest", "sans-serif"],
    },
  },
  plugins: [],
};
