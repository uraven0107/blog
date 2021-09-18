import React from "react"
import Card from "./card"

export default function PostLinks( { data } ) {
	return (
		<div className='grid md:grid-cols-3 gap-x-36 gap-y-28'>
		{data.allMarkdownRemark.nodes.map(node => (
			renderCard(node) 
		))}
		</div>
	)
}

function renderCard(node) {
	const post = {
		title: node.frontmatter.title,
		date: node.frontmatter.date,
		slug: node.fields.slug
	}
	return (
		<Card post={ post } />
	)
}
