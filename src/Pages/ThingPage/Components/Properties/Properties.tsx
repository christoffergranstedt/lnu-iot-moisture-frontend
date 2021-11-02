import React from 'react'
import { v4 as uuid } from 'uuid'
import Card from '../../../../Components/Card/Card'
import { PropertyDescription } from '../../../../Utils/types/PropertyDescription'
import Property from './Components/Property'

interface PropertiesProps {
	properties: PropertyDescription[]
}

export const Properties: React.FC<PropertiesProps> = ({ properties }) => {
	return (
		<Card>
			<h3>Properties</h3>
			{properties.map(property => {
				return <Property key={uuid()} property={property}/>
			})}
		</Card>
	)
}

export default Properties