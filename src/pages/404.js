import React from 'react'
import Layout from '../components/layout'
import img from '../images/sorry.png'

export default function NotFound() {
	return (
		<Layout>
			<div className="text-center">
				<p className="text-9xl mx-2">404</p>
				<p className="text-xl">File Not Found.</p>
				<img src={img} alt="ごめんね" />
			</div>
		</Layout>
	)
}
