module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
        'primary': '#49426c',
        'primary-hover': '#685e9d',
        'secondary': '#efc18d',
        'third': '#b79aea',
        'fourth': '#a6c9ef',
        'fifth': '#efaa9b',
        'sixth': '#322b50'
      },
      width: {
        '124': '36rem'
      },
      height: {
        '112': '30rem'
      },
      fontSize: {
        'mini': '.5rem'
      } 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}