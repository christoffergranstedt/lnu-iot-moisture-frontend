import React from 'react'
import { PropertyDescription } from '../../../../../Utils/types/PropertyDescription'
import styled from 'styled-components'
import Values from './Components/Values'

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
				<Values values={property.values}/>
			</div>
		</StyledDiv>
	)
}

export default Property