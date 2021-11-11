import React from 'react'
import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { CacheName } from '../../Contants/CacheName'
import { ActionsOverview } from '../../Components/ActionsOverview/ActionsOverview'
import { PropertiesOverview } from '../../Components/PropertiesOverview/PropertiesOverview'
import { EventsOverview } from '../../Components/EventsOverview/EventsOverview'
import { ThingDescription } from '../../Types/ThingDescription'
import { HTTPMethod } from '../../Contants/HTTPMethod'
import { Card } from '../../Components/Card/Card'
import { ThingInfo } from '../../Components/ThingInfo/ThingInfo'

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
	const { user } = useAuth()
	const { sendRequest } = useRequest()
	const { data: { thing } = {}, isLoading, isError, refetch: refetchThing } = useQuery<ThingResponse>([CacheName.Thing, thingId], async () => await sendRequest({ url: `/things/${thingId}`, method: HTTPMethod.GET, token: user.accessToken }))

	if (isLoading || isError || !thing) {
		return (
			<div>
				<h1>Thing Page</h1>
				<Loader type="ThreeDots" color="#cccccc" height={30} />
			</div>
		)
	} else {
		return (
			<>
				<h1>Thing Page - {thing.title}</h1>
				<Card><ThingInfo thing={thing}/></Card>
				<Card><PropertiesOverview properties={thing.properties}/></Card>
				<Card><ActionsOverview actions={thing.actions}/></Card>
				<Card><EventsOverview events={thing.events} refetchThing={refetchThing}/></Card>
			</>
		)
	}
}