/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html'],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['Space Mono', 'serif'],
      body: ['Bitter', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#26142a',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
