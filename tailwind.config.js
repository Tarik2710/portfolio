/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '400px',
        'md': '960px',
        'lg': '1440px',
        'xl': '1536px'
        
      }
    },
  },
  plugins: [],
};
