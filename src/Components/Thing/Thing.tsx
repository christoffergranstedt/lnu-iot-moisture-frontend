import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { ThingDescription } from '../../Types/ThingDescription'

const StyledDiv = styled.div`
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.15);
	margin: 20px 0px;
	background: white;
	cursor: pointer;
	width: 50%;
	margin: 0 auto;
	padding: 10px;
	border-radius: 10px;

	&:hover {
		background: rgb(235, 235, 235);
	}

	h3 {
		font-size: 19px;
		margin-bottom: 5px;
	}
`

interface ThingProps {
	thing: ThingDescription
}

export const Thing: React.FC<ThingProps> = ({ thing }) => {
	const history = useHistory()

	const openThingPage = () => {
		history.push(`/things/${thing.id}`)
	}

	return (
		<StyledDiv onClick={openThingPage}>
			<h3>{thing.title}</h3>
			<p>Description: {thing.description}</p>
		</StyledDiv>
	)
}