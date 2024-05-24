/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Space Mono', 'serif'],
      body: ['Bitter', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#26142a',
    }),
    extend: {
      backgroundOpacity: ['main'],
      gridTemplateColumns: {
        projects: 'repeat(auto-fill,minmax(250px,1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
