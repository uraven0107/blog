import React from 'react'
import Brand from './brand'

export default function Links({ brands }) {
	return (
		<menu>
			<div className="flex flex-row justify-center">
				{brands.map(brand => (
					<div className="mx-3">
						<Brand brand={brand} />
					</div>
				))}
			</div>
		</menu>
	)
}
