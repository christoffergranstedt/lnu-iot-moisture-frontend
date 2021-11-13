import React from 'react'

import { PropertyDescription } from '../../Types/PropertyDescription'
import { ValueList } from '../ValueList/ValueList'

interface PropertyProps {
	property: PropertyDescription
	className?: string
}

export const Property: React.FC<PropertyProps> = ({ property, className }) => {
	return (
		<>
			<div className={className}>
				<ValueList values={property.values}/>
			</div>
		</>
	)
}