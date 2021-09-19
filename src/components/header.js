import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
	return (
		<header>
			<div className="grid place-items-center my-8">
				<Link to="/">
					<p className="font-bold text-4xl">uraven0107</p>
				</Link>
			</div>
		</header>
	)
}
