import React from 'react'

import { useAuth } from '../../Hooks/useAuth'
import { useEvent } from '../../Hooks/useEvent'
import { EventDescription } from '../../Types/EventDescription'

interface EventProps {
	event: EventDescription
	refetchThing: Function
	className?: string
}

export const Event: React.FC<EventProps> = ({ event, refetchThing, className }) => {
	const { hasAuthenticatedTelegram } = useAuth()
	const { handleSubscriptionToEvent: subscribeToEvent } = useEvent()
	const [isSubscribing, setIsSubscribing] = React.useState<boolean>(false)

	React.useEffect(() => {
		setIsSubscribing(event.isSubscribing)
		console.log('test')
	}, [event.isSubscribing])

	return (
		<div className={`${className} inline-block w-96 text-center py-2 rounded-md`}>
			<h5 className="text-xl">{event.title}</h5>
			{ hasAuthenticatedTelegram() && !isSubscribing ? <button className="my-2 bg-green-600 text-white w-28 h-8 rounded-md hover:bg-green-500" onClick={() => { subscribeToEvent(event.forms, true); setIsSubscribing(true) } }>Subscribe</button> : null }
			{ hasAuthenticatedTelegram() && isSubscribing ? <button className="my-2 bg-red-800 text-white w-28 h-8 rounded-md hover:bg-red-700" onClick={() => { subscribeToEvent(event.forms, false); setIsSubscribing(false) } }>Unsubscribe</button> : null }
		</div>
	)
}