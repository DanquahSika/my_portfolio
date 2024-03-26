/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colours:{
        peach: {
        light: '#edc7b7',
        default: '#eee2dc',
        },
        grey: {
          default:'#bab2b5'},
        
        blue: {
          default:'#123c69'},

        pink:
       {default: '#ac3b61'},
    },
    extend: {},
  },
  plugins: [],
}

