/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#E84C24',
        'orange-light': '#F5A623',
        'yellow-primary': '#FDB913',
        'yellow-brand': '#FDB913',
        'green-primary': '#7FB03E',
        'green-light': '#7FB03E',
        'green-lime': '#B8D430',
        'gray-text': '#2C3E50',
        'gray-dark': '#2C3E50'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

