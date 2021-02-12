module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'main': 'linear-gradient(#f9f9f9bb, #f9f9f9bb), url("/img/y-so-serious-white.png")',
      }),
      backgroundOpacity: ['main'],
      gridTemplateColumns: {
        "projects": "repeat(auto-fill,minmax(250px,1fr))",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
