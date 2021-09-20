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
	const brands = data.site.siteMetadata.brands
	return (
		<Layout brands={brands}>
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
				brands {
					name
					link
				}
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
