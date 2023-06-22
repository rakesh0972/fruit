/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red': '#DC0D0D',
      'blue': '#4251D8',
      'nav': '#2F40B7',
      'white': '#fff',
      'black': '#000',
      'gray': '#667085',
      'gray-light': '#98A2B3',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      inter: ['Inter', 'sans-serif']

    },
    extend: {},
  },
  plugins: [],
}