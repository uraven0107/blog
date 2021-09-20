import React from 'react'
import Layout from '../components/layout'
import Meta from '../components/meta'
import img from '../images/sorry.png'
import { graphql } from 'gatsby'

export default function NotFound({ data }) {
	const metadata = {
		title: data.site.siteMetadata.title,
		description: data.site.siteMetadata.description,
	}
	const brands = data.site.siteMetadata.brands
	return (
		<Layout brands={brands}>
			<Meta metadata={metadata} />
			<div className="text-center">
				<p className="text-9xl mx-2">404</p>
				<p className="text-xl">File Not Found.</p>
				<img src={img} alt="ごめんね" />
			</div>
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
	}
`
