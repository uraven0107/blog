import React from 'react'
import Header from './header'

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<main className="xl:mx-80 md:mx-8 px-4 md:py-4">{children}</main>
		</div>
	)
}
