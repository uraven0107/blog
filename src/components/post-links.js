import { graphql } from "gatsby"
import React from "react"
import PostLink from "./post-link"

export default function PostLinks( { data } ) {
	return (
		<div className='grid md:grid-cols-3 gap-x-36 gap-y-28'>
		{data.allMarkdownRemark.nodes.map(node => (
			renderPostLink(node) 
		))}
		</div>
	)
}

function renderPostLink(node) {
	const post = {
		title: node.frontmatter.title,
		date: node.frontmatter.date,
		slug: node.fields.slug
	}
	return (
		<PostLink post={ post } />
	)
}
