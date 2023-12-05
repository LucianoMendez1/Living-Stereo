/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
        },
        colors: {
          // Brand colors
          emerald: "#6fcf97",
          "strong-yellow": "#fffc09",
          "orange-info": "#f89c04",
          "base":"#1E2648"
        },
        screens: {
            'tall': { 'raw': '(max-height: 731px)' },
            
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        animation: {

        },
        keyframes: {
   
        },
      },
    },
   /*  plugins: [require("daisyui"), require("flowbite/plugin")], */
  };
  