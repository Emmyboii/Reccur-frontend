/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        uncut: ['"Uncut Sans VF"', 'sans-serif'],
      },
      screens: {
        'mf': '850px',
        'sp': '450px',
        'sd': '500px',
        'sa': '550px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
