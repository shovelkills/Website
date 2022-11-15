/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        'blue-zodiac': {
          DEFAULT: '#0A1931',
          '50': '#2967C9',
          '100': '#265EB9',
          '200': '#1F4D97',
          '300': '#183C75',
          '400': '#112A53',
          '500': '#0A1931',
          '600': '#000102',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      },
    },
  },
  plugins: [],
}