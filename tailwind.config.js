/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        secondary: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      }
    },
  },
  plugins: [],
}
