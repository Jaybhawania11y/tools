/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
        },
        yellow: {
          400: '#facc15',
        },
      },
    },
  },
  plugins: [],
}