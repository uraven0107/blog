import React from 'react'
import Layout from '../components/layout'
import Meta from '../components/meta'
import PostLinks from '../components/post-links'
import { graphql } from 'gatsby'

export default function Home({ data }) {
	const metadata = {
		title: data.site.siteMetadata.title,
		description: data.site.siteMetadata.description,
	}
	return (
		<Layout>
			<Meta metadata={metadata} />
			<PostLinks data={data} />
		</Layout>
	)
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
		allMarkdownRemark {
			nodes {
				frontmatter {
					title
					date
					thumbnail {
						childrenImageSharp {
							fluid(fit: COVER) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				fields {
					slug
				}
			}
		}
	}
`
