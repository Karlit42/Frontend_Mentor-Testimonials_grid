/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['"Barlow Semi Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

