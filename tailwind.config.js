/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // './public/index.html',
    // './app/**/*.jsx',
    // './src/components/**/*.jsx',
    // './src/pages/**/*.jsx',
  ],
  theme: {
    fontFamily: {
       sans: [],
       serif:[]
    },
    extend: {
      colors: {
        primary_text_color: 'var(--primary-text-color)',
        secondary_text_color: 'var(--secondary-text-color)',
      },
      backgroundColor: {
        bg_white: 'var(--color-white)',
        bg_blue: 'var(--color-blue)',
        bg_purple: 'var(--color-purple)',
        bg_red: 'var(--color-red)',
        bg_black: 'var(--color-black)',
      },
      rotate: {
        10: '10deg',
        15: '15deg',
        20: '20deg',
        35: '35deg',
        40: '40deg',
        5: '5deg',
        1: '-15deg',
        2: '-3deg'
      }
    },
  },

  plugins: [],
};