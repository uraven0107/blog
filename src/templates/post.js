import React from 'react'
import Layout from '../components/layout'

export default function Post({ pageContext }) {
	const { title, date, body } = pageContext

	return (
		<Layout>
			<div className="lg:mx-14 p-2">
				<div className="my-8 border-l-2 border-gray-500 px-2">
					<h1 className="text-4xl">{title}</h1>
					<p className="text-sm">{date}</p>
				</div>
				<article>
					<div dangerouslySetInnerHTML={{ __html: body }} />
				</article>
			</div>
		</Layout>
	)
}
