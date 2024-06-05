/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.ejs"],
	theme: {
		extend: {
			daisyui: {
				themes: [

				]
			}
		},
	},
	plugins: [
		require('daisyui'),
	],
}

