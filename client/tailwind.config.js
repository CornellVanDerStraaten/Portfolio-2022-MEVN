/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*.{js,ts,jsx,tsx,vue}",
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#03989E',
        'secondary': '#9E0903',
      }
    },
  },
  plugins: [],
}
