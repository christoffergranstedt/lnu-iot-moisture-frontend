module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'phone': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#49426c',
        primaryHover: '#685e9d',
        secondary: '#efc18d',
        third: '#b79aea',
        fourth: '#a6c9ef',
        fifth: '#efaa9b',
        sixth: '#322b50'
      },
      width: {
        '124': '36rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
