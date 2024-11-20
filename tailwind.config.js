/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7B61FF",
        charcoal: "#222222",
        red: "#FC5555",
        green: "#29CC6A",
        blue: "#0099FF",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      primary: ["Onest", "sans-serif"],
    },
  },
  plugins: [],
};
