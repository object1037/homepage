/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        ppink: {
          200: '#fd2e7a',
          300: '#df286c',
        },
      },
      fontFamily: {
        sans: ['JetBrainsMono', ...fontFamily.mono],
      },
      minHeight: {
        screenWithoutHeader: ['calc(100vh - 9rem)', 'calc(100dvh - 9rem)'],
      },
    },
  },
  plugins: [],
}
