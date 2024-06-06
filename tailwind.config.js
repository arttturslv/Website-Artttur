/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'jet':'#2F2F2F',
        'platinum':'#E5E5E5',
      }
    },
  },
  plugins: [],
}

