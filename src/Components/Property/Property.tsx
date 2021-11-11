import React from 'react'

import { PropertyDescription } from '../../Types/PropertyDescription'
import { ValueList } from '../ValueList/ValueList'

interface PropertyProps {
	property: PropertyDescription
}

export const Property: React.FC<PropertyProps> = ({ property }) => {
	const [className, setClassName] = React.useState<string>('hidden')

	const toggleDisplay = (event: React.MouseEvent<HTMLParagraphElement>) => {
		className === 'hidden' ? setClassName('display') : setClassName('hidden')
	}
	return (
		<>
			<div className='title' onClick={toggleDisplay}><p>{property.title}</p></div>
			<div className={className}>
				<ValueList values={property.values}/>
			</div>
		</>
	)
}