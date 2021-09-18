/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
	  title: "uraven0107's blog",
	  description: "blog made by Gatsby,tailwind",
	  author: "uraven0107"
  },
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: `posts`,
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
					"heading[depth=1]": "text-3xl mb-4 border-b border-gray-500",
					"heading[depth=2]": "text-2xl mb-4 border-b border-gray-500",
				  }
				}
			  }
			]
		  }
		},
	],
}
