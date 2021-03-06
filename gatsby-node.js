const path = require('path')

//slugの生成
exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	//MarkdownRemarkの場合に、slugを追加する
	if (node.internal.type === 'MarkdownRemark') {
		//node.jsのbasename関数を用いてslugを抽出
		const slug = path.basename(node.fileAbsolutePath, '.md')

		//nodeの再編成 createNodeField: https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNodeField
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		})
	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const result = await graphql(
		`
			{
				site {
					siteMetadata {
						title
						description
						brands {
							name
							link
						}
					}
				}
				allMarkdownRemark {
					edges {
						node {
							html
							frontmatter {
								title
								date
							}
							fields {
								slug
							}
						}
					}
				}
			}
		`
	)

	if (result.errors) {
		reporter.warn(
			'graphqlでエラーが発生しました。postsディレクトリにマークダウンファイルが存在していない可能性があります。'
		)
		result.errors.forEach(error => {
			reporter.warn(error.message)
		})
		return
	}

	const metadata = result.data.site.siteMetadata
	const { edges } = result.data.allMarkdownRemark

	edges.forEach(edge => {
		createPage({
			path: `/posts/${edge.node.fields.slug}/`,
			component: path.resolve('./src/templates/post.js'),
			context: {
				metadata: metadata,
				title: edge.node.frontmatter.title,
				date: edge.node.frontmatter.date,
				body: edge.node.html,
			},
		})
	})
}
