const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      Blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      twitter: '#1DA1F2',
      ppink: '#ff0f53',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
