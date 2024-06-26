/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-colored': '0 4px 6px -1px #c6ffee', // sombra con color personalizado
      },
      colors: {
        'aquamarine': {
          '50': '#e7fff9',
          '100': '#c6ffee',
          '200': '#92ffe4',
          '300': '#4dffdb',
          '400': '#00ffcc',
          '500': '#00e8b7',
          '600': '#00be97',
          '700': '#00987e',
          '800': '#007865',
          '900': '#006254',
          '950': '#003831',
      },


      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

// #0dfbb4