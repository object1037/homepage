const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        ppink: {
          200: '#fd2e7a',
          300: '#df286c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'YuGothic', "Yu Gothic Medium", "Yu Gothic", ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}
