import React from 'react'
import { v4 as uuid } from 'uuid'

import { useAuth } from '../../Hooks/useAuth'
import { EventDescription } from '../../Types/EventDescription'
import { Card } from '../Card/Card'
import { Event } from '../Event/Event'

interface EventProps {
	events: EventDescription[];
	refetchThing: Function
}

export const EventsOverview: React.FC<EventProps> = ({ events, refetchThing }) => {
	const { hasAuthenticatedTelegram } = useAuth()

	return (
		<Card>
			<h3>Events</h3>
			{!hasAuthenticatedTelegram() ? <p>No Telegram account connected, follow instructions above</p> : events.map(event => {
				return <Event key={uuid()} event={event} refetchThing={refetchThing}/>
			})}
		</Card>
	)
}