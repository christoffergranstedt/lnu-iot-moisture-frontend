import React from 'react'
import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { v4 as uuid } from 'uuid'

import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { CacheName } from '../../Contants/CacheName'
import { ThingDescription } from '../../Types/ThingDescription'
import { HTTPMethod } from '../../Contants/HTTPMethod'
import { Thing } from '../../Components/Thing/Thing'

interface ThingsResponse {
	things: ThingDescription[]
}

interface ThingsPageProps {

}

export const ThingsPage: React.FC<ThingsPageProps> = (props) => {
	const { user } = useAuth()
	const { sendRequest } = useRequest()

	const { data, isLoading, isError } = useQuery<ThingsResponse>([CacheName.Things], async () => await sendRequest({ url: '/things', method: HTTPMethod.GET, token: user.accessToken }))

	return (
		<>
			<h1>Granstedt's Things - {user.username}</h1>
			{ isLoading ? <Loader type="ThreeDots" color="#cccccc" height={30} /> : null }
			{ !isLoading && !isError && data?.things ? data.things.map(thing => {
				return <Thing key={uuid()} thing={thing}/>
			}) : null
		}
		</>
	)
}