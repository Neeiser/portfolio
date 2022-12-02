/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgMainRed': "url('../public/assets/img/layered-waves-haikei.svg')",
      },
      colors: {
        orangeOW: '#FE6235',
        grayOW: '#6E6D72',
        whiteOW: '#FBFCFE',
        blackOW:'#1A1D26'
      },
      fontFamily:{
        
      },
    },
  },
  plugins: [],
}