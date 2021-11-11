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
        primary: '#586999',
        primaryHover: '#7a89b3',
        secondary: '#edbb4c',
        third: '#6E8EE6',
        thirdHover: '#87a1e9',
        fourth: 'rgb(55, 55, 75)',
        fifth: '#998068',
        fifthHover: '#ab937c'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
