import React from 'react'
import Loader from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { CacheName } from '../../Utils/enums/CacheName'
import { HTTPMethod } from '../../Utils/enums/HTTPMethod'
import { ThingDescription } from '../../Utils/types/ThingDescription'
import Thing from './Components/Thing'

const StyledDiv = styled.div`
	display: block;

	h1 {
		text-align: center;
		font-size: 36px;
	}
`

interface ThingsResponse {
	things: ThingDescription[]
}

interface DashboardPageProps {

}

export const ThingsPage: React.FC<DashboardPageProps> = (props) => {
	const { user } = useAuth()
	const { sendRequest } = useRequest()

	const { data, isLoading, isError } = useQuery<ThingsResponse>([CacheName.Things], async () => await sendRequest({ url: '/api/things', method: HTTPMethod.GET, token: user.accessToken }))

	return (
		<StyledDiv>
			<h1>Granstedt's Things - {user.username}</h1>
			{ isLoading ? <Loader type="ThreeDots" color="#cccccc" height={30} /> : null }
			{ !isLoading && !isError && data?.things ? data.things.map(thing => {
				return <Thing key={uuid()} thing={thing}/>
			}) : null
		}
		</StyledDiv>
	)
}

export default ThingsPage