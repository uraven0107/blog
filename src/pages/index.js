import React from "react"
import Layout from "../components/layout"
import PostLinks from "../components/post-links"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
	  	<Layout>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>{ data.site.siteMetadata.title }</title>
	  			<meta content={ data.site.siteMetadata.description } name="description" />
			</Helmet>
			<PostLinks data={ data }/>	
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
			  }
			  fields {
				slug
			  }
			}
		}
	}
`
