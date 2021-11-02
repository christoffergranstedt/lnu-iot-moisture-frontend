import React from 'react'
import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { CacheName } from '../../Utils/enums/CacheName'
import { HTTPMethod } from '../../Utils/enums/HTTPMethod'
import { ThingDescription } from '../../Utils/types/ThingDescription'
import Actions from './Components/Actions/Actions'
import { Events } from './Components/Events/Events'
import Properties from './Components/Properties/Properties'
import styled from 'styled-components'

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

interface Params {
	thingId: string
}

export const ThingPage: React.FC<ThingPageProps> = (props) => {
	const { thingId } = useParams<Params>()
	const { user } = useAuth()
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
				<p>Id {thing.id}</p>
				<Properties properties={thing.properties}/>
				<Actions actions={thing.actions}/>
				<Events events={thing.events} refetchThing={refetchThing}/>
			</StyledDiv>
		)
	}
}

export default ThingPage