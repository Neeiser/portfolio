/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeOW: '#f99e1a',
        grayOW: '#43484c',
        blueOW: '#405275',
        lightBlueOW: '#218ffe',
        blackOW:'#181818'
      },
      fontFamily:{
        
      },
    },
  },
  plugins: [],
}