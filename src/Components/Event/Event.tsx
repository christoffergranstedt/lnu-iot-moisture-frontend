import React from 'react'

import { useAuth } from '../../Hooks/useAuth'
import { useEvent } from '../../Hooks/useEvent'
import { EventDescription } from '../../Types/EventDescription'

interface EventProps {
	event: EventDescription
	refetchThing: Function
}

export const Event: React.FC<EventProps> = ({ event, refetchThing }) => {
	const { hasAuthenticatedTelegram } = useAuth()
	const { handleSubscriptionToEvent: subscribeToEvent } = useEvent()
	const [isSubscribing, setIsSubscribing] = React.useState<boolean>(false)

	React.useEffect(() => {
		setIsSubscribing(event.isSubscribing)
		console.log('test')
	}, [event.isSubscribing])

	return (
		<>
			<div className='info'><p>{event.title}</p></div>
			<div className='actions'>
				{ hasAuthenticatedTelegram() && !isSubscribing ? <button className='subscribe' onClick={() => { subscribeToEvent(event.forms, true); setIsSubscribing(true) } }>Subscribe</button> : null }
				{ hasAuthenticatedTelegram() && isSubscribing ? <button className='unsubscribe' onClick={() => { subscribeToEvent(event.forms, false); setIsSubscribing(false) } }>Unsubscribe</button> : null }
			</div>
		</>
	)
}