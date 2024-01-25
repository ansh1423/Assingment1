
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter : ['Inter', 'sans-serif']
      
      },

    },
  },
  plugins: [],
}
