import React from 'react'
import Header from './header'

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<main className="md:mx-80 sm:mx-8 px-4 md:py-4">{children}</main>
		</div>
	)
}
