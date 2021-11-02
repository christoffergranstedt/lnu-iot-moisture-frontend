import React from 'react'
import { v4 as uuid } from 'uuid'

import { PropertyDescription } from '../../Utils/types/PropertyDescription'
import Card from '../Card/Card'
import Property from '../Property/Property'

interface PropertiesProps {
	properties: PropertyDescription[]
}

export const PropertiesOverview: React.FC<PropertiesProps> = ({ properties }) => {
	return (
		<Card>
			<h3>Properties</h3>
			{properties.map(property => {
				return <Property key={uuid()} property={property}/>
			})}
		</Card>
	)
}