/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '350px',
        'md': '1439px',
        'lg': '1440px',
        'xl': '1442px', 
        'xxl': '1813px',
        'ultraxl': '2300px'
        
      }
    },
  },
  plugins: [],
};