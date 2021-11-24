module.exports = {
  //mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f7f7f7',
        secondary: '#393e46',
        tertiary: '#929aab'
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
