/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 1s ease-in-out ;'
      },
      keyframes: {
      'typing': {
        '0%': { width: '100%'},
        '50%': { width: '0%',},
        '100%': { width: '100%'},
      }},
      colors: {
        'jet':'#2F2F2F',
        'platinum':'#E5E5E5',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

