/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  
  plugins: [
    require('tw-elements/dist/plugin')
  ],

  screens: {
    '2xl': {'max': '1535px'},
    // => @media (max-width: 1535px) { ... }

    'xl': {'max': '1279px'},
    // => @media (max-width: 1279px) { ... }

    'lg': {'max': '1023px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'max': '767px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '639px'},
    // => @media (max-width: 639px) { ... }
  },
}
