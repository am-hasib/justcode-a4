/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about-us.html",
    "./contact.html",
    "./news.html",
    "./services.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['"Poppins"', '"sans-serif"'],
      rubik: ['"Rubik"', '"sans-serif"'],
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
  },
  plugins: [],
};
