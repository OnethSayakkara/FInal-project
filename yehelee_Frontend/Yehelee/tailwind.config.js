/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      brown: '#CDA582',
      white: '#FFFFFF',
      black: '#000000',
      light_brown: '#744B28',
      gray_black: '#313131',
      cyn: '#F9ECE1',
      light_yellow: '#F9ECE1',
      rose:'#EE66A6',
      red : '#ff0000',
      blue : '#1877F2',
      blue_light : '#adcefa',
      darkblue : '#052855',
      gray:'#c8c8c8',
      orange: {
        500: '#C09A79',
        600: '#A07F65',
      },
      yellow: '#FFEB00',
    },
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out forwards',
        scaleUp: 'scaleUp 3s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
