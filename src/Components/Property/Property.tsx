import React from 'react'
import styled from 'styled-components'

import { PropertyDescription } from '../../Types/PropertyDescription'
import { ValueList } from '../ValueList/ValueList'

const StyledDiv = styled.div`
	border: 1px solid rgb(200, 200, 200);
	border-radius: 10px;
	margin: 10px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	div.hidden {
		display: none;
	}

	div.display {
		display: block;
		padding: 15px;
		flex: 1 1 100%;
	}

	div.title {
		flex: 1 1 100%;
		padding: 15px;
		display: block;
		height: 100%;
		cursor: pointer;
		border-bottom: 1px solid rgb(200, 200, 200);
		border-radius: 10px;

		&:hover {
			background: rgb(235, 235, 235);
		}
	}
`

interface PropertyProps {
	property: PropertyDescription
}

export const Property: React.FC<PropertyProps> = ({ property }) => {
	const [className, setClassName] = React.useState<string>('hidden')

	const toggleDisplay = (event: React.MouseEvent<HTMLParagraphElement>) => {
		className === 'hidden' ? setClassName('display') : setClassName('hidden')
	}
	return (
		<StyledDiv>
			<div className='title' onClick={toggleDisplay}><p>{property.title}</p></div>
			<div className={className}>
				<ValueList values={property.values}/>
			</div>
		</StyledDiv>
	)
}