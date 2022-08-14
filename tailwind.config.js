const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      sky: colors.sky
    },
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
