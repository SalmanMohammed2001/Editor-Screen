/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         'black-rgba': 'rgba(0, 0, 0, 0.10)',
          'black-rgba2': 'rgb(250,250,250,1)'
      }
    },
  },
  plugins: [],
}