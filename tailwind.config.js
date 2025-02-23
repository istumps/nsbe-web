/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nsbe-blue': '#1B3666',
        'nsbe-orange': '#F47B20',
      }
    },
  },
  plugins: [],
} 