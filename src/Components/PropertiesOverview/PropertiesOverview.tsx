import React from 'react'
import { v4 as uuid } from 'uuid'

import { PropertyDescription } from '../../Types/PropertyDescription'
import { Property } from '../Property/Property'

interface PropertiesProps {
	properties: PropertyDescription[]
}

export const PropertiesOverview: React.FC<PropertiesProps> = ({ properties }) => {
	return (
		<>
		<h3>Properties</h3>
		{properties.map(property => {
			return <Property key={uuid()} property={property}/>
		})}
		</>
	)
}