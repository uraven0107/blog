module.exports = {
	purge: ['./src/**/*.{js,jsx}', './public/**/*.{html}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: ['gatsby-plugin-postcss'],
}
