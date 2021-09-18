import React from "react"
import { Link } from "gatsby"

const RANDOM_IMG = "https://source.unsplash.com/random";

export default function PostLink( { post } ) {
	const link = `/posts/${post.slug}`
	return (
		<Link to={ link }>
			<div className='border-gray-50 shadow-md rounded-md'>
				<div>
					<img src={RANDOM_IMG} alt="post-cover" className='object-cover h-36 w-full'></img>
				</div>
				<div className='p-2'>
					<p className="text-lg">{ post.title }</p>
					<p className="text-sm">{ post.date }</p>
				</div>
			</div>
		</Link>
	)
}
