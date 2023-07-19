/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        green: '#06aaa2',
        yellow: '#B7CB0A',
        grey: '#4c4c45',
        fucsia: '#FF45A4',
        'deep-green': '#045652',
        'deep-orange': '#f2b17c',
        'dark-grey': '#2f3131',
        'green-yellow': '#D1ff3a',
        'opaque-black': 'rgba(0,0,0,0,.35)'
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
        'linear-gradient(81.66deg, #00BFEE 10.21%, #FF45A4 45.05%, #FFBA00 90.07%)',
        'gradient-rainblue':
        'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)'
      }),
      fontFamily: {
        lato: ['Lato', 'sistem-ui'],
        montserrat: ['Montserrat', 'sistem-ui'],
        poppins: ['Poppins', 'sistem-ui'],
        oswald: ['Oswald', 'sistem-ui'],
        railway: ['Railway', 'sistem-ui']
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px'
      }
      // content: {
      //   brush: "url('./assets/brush.png')"
      // }

    }
  },
  plugins: []
}
