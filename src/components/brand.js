import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Brand({ brand }) {
	return (
		<Link to={brand.link} target="_blank">
			<FontAwesomeIcon icon={['fab', brand.name]} size="2x" />
		</Link>
	)
}
