/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#f9f7f2",
      secondary: colors.emerald[600]
    }
  },
  plugins: [],
}
