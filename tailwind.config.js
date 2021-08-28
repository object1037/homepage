const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        ppink: '#fd2e7a',
      },
      fontFamily: {
        sans: ['Inter', 'YuGothic', "Yu Gothic Medium", "Yu Gothic", ...fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
