/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-bg':'#032541'
      },
      screens: {
        'sm': '400px',
        // => @media (min-width: 640px) { ... }
        'md': '528px',
        // => @media (min-width: 768px) { ... }
        'lg': '790px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1000px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1200px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

