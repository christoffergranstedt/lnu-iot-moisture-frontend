import React from 'react'
import { useNavigate } from 'react-router'

import { ThingDescription } from '../../Types/ThingDescription'

interface ThingProps {
	thing: ThingDescription
	className?: string
}

export const Thing: React.FC<ThingProps> = ({ thing, className }) => {
	const navigate = useNavigate()

	const openThingPage = () => {
		navigate({ pathname: `/things/${thing.id}` })
	}

	return (
		<button className={`${className} rounded-xl p-4 cursor-pointer border-2 border-secondary text-white hover:bg-secondary hover:text-gray-800`} onClick={openThingPage}>
			<h3 className="text-2xl">{thing.title}</h3>
			<p><strong>Description:</strong> {thing.description}</p>
		</button>
	)
}