/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#71A894"
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}