/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
      },
      fontFamily: {
        mono: ['JetBrainsMono', ...fontFamily.mono],
      },
      height: {
        screen: 'calc(100vh - 2rem)',
      },
      minHeight: {
        screenWithoutHeader: ['calc(100vh - 6rem)', 'calc(100dvh - 6rem)'],
      },
    },
  },
  plugins: [],
}
