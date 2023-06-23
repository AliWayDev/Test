/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      "colors": {
        "primary": "#32C076",
        "secondary": "#EBEBF0",

        "text-color": "#424F5E",
        "text-secodary": '#9494A0',
        
        "lightblue": "#5856D6",
        "gray": "#AFAFAF"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

