import React from 'react'
import { v4 as uuid } from 'uuid'

import { PropertyDescription } from '../../Types/PropertyDescription'
import { Property } from '../Property/Property'
import { SubHeading } from '../SubHeading/SubHeading'

interface PropertiesProps {
	properties: PropertyDescription[]
	className?: string
}

export const PropertiesOverview: React.FC<PropertiesProps> = ({ properties, className }) => {
	return (
		<div className={className}>
			<SubHeading>Properties</SubHeading>
			<div>
				{properties.map(property => {
					return <Property key={uuid()} property={property}/>
				})}
			</div>
		</div>
	)
}