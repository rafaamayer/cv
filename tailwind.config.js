module.exports = {
  //mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2a2438',
        secondary: '#352f44',
        tertiary: '#5c5470',
        quaternary: '#dbd8e3'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
