import React from 'react'
import Header from './header'
import Links from './links'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fab)
config.autoAddCss = false

export default function Layout({ children, brands }) {
	return (
		<div>
			<Header />
			<Links brands={brands} />
			<main className="xl:mx-80 md:mx-8 px-4 md:py-4">{children}</main>
		</div>
	)
}
