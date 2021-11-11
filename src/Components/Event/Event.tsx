import React from 'react'
import styled from 'styled-components'

import { useAuth } from '../../Hooks/useAuth'
import { useEvent } from '../../Hooks/useEvent'
import { EventDescription } from '../../Types/EventDescription'

const StyledDiv = styled.div`
	border: 1px solid rgb(200, 200, 200);
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
	display: flex;
	align-items: center;

	div.info {
		flex: 1 1 50%;
		display: inline;
		margin-right: 50px;
	}

	div.actions {
		flex: 1 1 50%;

		button {
			border-radius: 8px;
			border: none;
			color: white;
			text-decoration: none;
			font-size: 14px;
			cursor: pointer;
			padding: 10px 15px;

			&.subscribe {
				background: rgb(58, 141, 37);

				&:hover {
					background: rgb(78, 177, 53);
				}			
			}

			&.unsubscribe {
				background: rgb(190, 68, 68);

				&:hover {
					background: rgb(202, 86, 86);
				}
			}
		}
	}
`

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
		<StyledDiv>
			<div className='info'><p>{event.title}</p></div>
			<div className='actions'>
				{ hasAuthenticatedTelegram() && !isSubscribing ? <button className='subscribe' onClick={() => { subscribeToEvent(event.forms, true); setIsSubscribing(true) } }>Subscribe</button> : null }
				{ hasAuthenticatedTelegram() && isSubscribing ? <button className='unsubscribe' onClick={() => { subscribeToEvent(event.forms, false); setIsSubscribing(false) } }>Unsubscribe</button> : null }
			</div>
		</StyledDiv>
	)
}