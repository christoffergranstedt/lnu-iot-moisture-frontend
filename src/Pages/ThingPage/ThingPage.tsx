import React from 'react'
import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import styled from 'styled-components'

import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { CacheName } from '../../Contants/CacheName'
import { ActionsOverview } from '../../Components/ActionsOverview/ActionsOverview'
import { PropertiesOverview } from '../../Components/PropertiesOverview/PropertiesOverview'
import { EventsOverview } from '../../Components/EventsOverview/EventsOverview'
import { ThingDescription } from '../../Types/ThingDescription'
import { HTTPMethod } from '../../Contants/HTTPMethod'

const StyledDiv = styled.div`
	margin: 0 auto;
	width: 60%;

	h1 {
		text-align: center;
	}
`

interface ThingResponse {
	thing: ThingDescription
}

interface ThingPageProps {
}

type Params = {
	thingId?: string
}

export const ThingPage: React.FC<ThingPageProps> = (props) => {
	const { thingId }: Params = useParams()
	const { user, hasAuthenticatedTelegram } = useAuth()
	const { sendRequest } = useRequest()
	const { data, isLoading, isError, refetch: refetchThing } = useQuery<ThingResponse>([CacheName.Thing, thingId], async () => await sendRequest({ url: `/api/things/${thingId}`, method: HTTPMethod.GET, token: user.accessToken }))

	if (isLoading || isError) {
		return (
			<div>
				<h1>Thing Page</h1>
				<Loader type="ThreeDots" color="#cccccc" height={30} />
			</div>
		)
	} else {
		const thing  = data?.thing
		if (!thing) throw new Error('Thing is not loaded')

		return (
			<StyledDiv>
				<h1>Thing Page - {thing.title}</h1>
				<p>Description {thing.description}</p>
				{ !hasAuthenticatedTelegram() && <p>To be able to subscribe to events or invoke actions a user must have authenticated his Telegram account with this service. 
				Please follow this link to the <a href="https://t.me/iot_granstedt_bot" target="__blank">IOT Bot</a>. Send your userid <strong>{user.userId}</strong> in the chat to connect your telegram account to your user id.
				After you have succesfully connected your telegram id, please sign out and sign back in for everything to be up and running </p> }
				{ hasAuthenticatedTelegram() && <p>You have already connected a Telegram account. To update to another Telegram account, please follow this link to the <a href="https://t.me/iot_granstedt_bot" target="__blank">IOT Bot</a>. Send your userid <strong>{user.userId}</strong> in the chat to connect your telegram account to your user id. </p>} 
				<PropertiesOverview properties={thing.properties}/>
				<ActionsOverview actions={thing.actions}/>
				<EventsOverview events={thing.events} refetchThing={refetchThing}/>
			</StyledDiv>
		)
	}
}