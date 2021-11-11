import React from 'react'
import { useNavigate } from 'react-router'

import { ThingDescription } from '../../Types/ThingDescription'

interface ThingProps {
	thing: ThingDescription
}

export const Thing: React.FC<ThingProps> = ({ thing }) => {
	const navigate = useNavigate()

	const openThingPage = () => {
		navigate({ pathname: `/things/${thing.id}` })
	}

	return (
		<div onClick={openThingPage}>
			<h3>{thing.title}</h3>
			<p>Description: {thing.description}</p>
		</div>
	)
}