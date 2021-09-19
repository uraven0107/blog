import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Card({ post }) {
	const link = `/posts/${post.slug}`
	return (
		<Link to={link}>
			<div className="border-gray-50 shadow-md rounded-md">
				<div>
					<Img
						fluid={post.fluid}
						className="object-cover h-36 w-full"
					></Img>
				</div>
				<div className="p-2">
					<p className="text-lg">{post.title}</p>
					<p className="text-sm">{post.date}</p>
				</div>
			</div>
		</Link>
	)
}
