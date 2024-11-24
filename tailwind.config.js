/** @type {import('tailwindcss').Config} */
import palette, { variants } from "./src/ui/theme/palette"

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...palette,
        ...variants
      },
    },
    fontFamily: {
      primary: ["Onest", "sans-serif"],
    },
  },
  plugins: [],
};
