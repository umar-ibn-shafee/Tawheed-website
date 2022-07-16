/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f7f2",
        primary_hard: "#eee8d9",
        secondary: colors.emerald[600],
        light_green: "#d4f2db" //colors.green[100]
      }
    }
  },
  plugins: [],
}
