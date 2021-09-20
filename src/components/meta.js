import React from 'react'
import { Helmet } from 'react-helmet'

export default function Meta({ metadata }) {
	return (
		<Helmet
			htmlAttributes={{ lang: 'ja-jp' }}
			title={metadata.title}
			meta={[
				{
					charSet: `utf-8`,
				},
				{
					name: `description`,
					content: metadata.description,
				},
				{
					property: `og:title`,
					content: metadata.title,
				},
				{
					property: `og:description`,
					content: metadata.description,
				},
				{
					property: `og:type`,
					content: `blog`,
				},
				{
					property: `og:locale`,
					content: `ja_JP`,
				},
			]}
		/>
	)
}
