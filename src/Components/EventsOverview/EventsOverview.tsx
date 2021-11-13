import React from 'react'
import { v4 as uuid } from 'uuid'

import { useAuth } from '../../Hooks/useAuth'
import { EventDescription } from '../../Types/EventDescription'
import { Event } from '../Event/Event'
import { SubHeading } from '../SubHeading/SubHeading'

interface EventProps {
	events: EventDescription[];
	refetchThing: Function
	className?: string
}

export const EventsOverview: React.FC<EventProps> = ({ events, refetchThing, className }) => {
	const { hasAuthenticatedTelegram } = useAuth()

	return (
		<div className={className}>
			<SubHeading>Events</SubHeading>
			<div className="flex flex-wrap justify-center">
				{!hasAuthenticatedTelegram() ? <p>No Telegram account connected, follow instructions above</p> : events.map(event => {
					return <Event key={uuid()} event={event} refetchThing={refetchThing} className="neumorphism mx-4 my-2"/>
				})}
			</div>
		</div>
	)
}