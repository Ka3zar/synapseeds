/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      daisyui: {
        themes: [
          "sunset", //TODO: guarda why non va
        ]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

