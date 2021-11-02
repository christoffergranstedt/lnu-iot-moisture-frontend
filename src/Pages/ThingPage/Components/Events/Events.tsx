import React from 'react'
import { v4 as uuid } from 'uuid'
import Card from '../../../../Components/Card/Card'
import { useAuth } from '../../../../Hooks/useAuth'
import { EventDescription } from '../../../../Utils/types/EventDescription'
import Event from './Components/Event'

interface EventProps {
	events: EventDescription[];
	refetchThing: Function
}

export const Events: React.FC<EventProps> = ({ events, refetchThing }) => {
	const { hasAuthenticatedTelegram, user } = useAuth()

	console.log(hasAuthenticatedTelegram())
	return (
		<Card>
			<h3>Events</h3>
			{ !hasAuthenticatedTelegram() ? <p>To be able to subscribe to events user must have authenticated his Telegram account with this service. 
				Please follow this link to the <a href="https://t.me/iot_granstedt_bot" target="__blank">IOT Bot</a>. Send your userid "{user.userId}" in the chat to connect your telegram account to your user id.
				After you have succesfully connected your telegram id, please sign out and sign back in for everything to be up and running </p> : 
			events.map(event => {
				return <Event key={uuid()} event={event} refetchThing={refetchThing}/>
			})}
		</Card>
	)
}

export default Events