/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "uraven0107's blog",
		description: 'blog made by Gatsby,tailwind',
		author: 'uraven0107',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: `posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: `images`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-classes`,
						options: {
							classMap: {
								'heading[depth=1]':
									'text-3xl mt-8 mb-4 border-b border-gray-300',
								'heading[depth=2]':
									'text-2xl mt-6 mb-4 border-b border-gray-300',
								listItem: 'list-disc list-inside',
							},
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false,
						},
					},
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	],
}
