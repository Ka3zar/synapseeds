/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      // Dark-Light Theme
    },
  },
  plugins: [
    require('daisyui'), // why is it like this?
  ],
}

