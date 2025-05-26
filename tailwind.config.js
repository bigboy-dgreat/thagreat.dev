/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        san: ['Roboto', 'San-serif'],
        favorit: ['Favorit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      },
      keyframes: {
        appear: {
          '0%': {
            opacity: 0,
            clipPath: 'inset(100% 100% 0 0)',
          },
          '100%': {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
            clipPath: 'inset(100% 100% 0 0)',
          },
          '100%': {
            opacity: 1,
            clipPath: 'inset(0 0 0 0)',
          },
        },
        greetingFade: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '20%': { opacity: 1, transform: 'translateY(0)' },
          '80%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
      },
      animation: {
        appear: 'appear 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out forwards',
        greeting: 'greetingFade 4s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

