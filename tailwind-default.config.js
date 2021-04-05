module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    flex:{
      'main': '1 0 30%',
    },
    backgroundImage:{
      'primary': '#2e6853',
      'secondary': '#439478',
      'beach': "url('/img/beach.png')",
      'beach2': "url('/img/beach2.svg')",
    },
    extend: {
      backgroundImage: theme => ({
        'exptop': "url('img/explore.jpg')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
