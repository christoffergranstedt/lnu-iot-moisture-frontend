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
import { Heading } from '../../Components/Heading/Heading'
import { useFlash } from '../../Hooks/useFlash'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'

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
	const { sendRequest } = useRequest()
	const { hasAuthenticatedTelegram, user } = useAuth()
	const { data: { thing } = {}, isLoading, isError, refetch: refetchThing } = useQuery<ThingResponse>([CacheName.Thing, thingId], async () => await sendRequest({ url: `/things/${thingId}`, method: HTTPMethod.GET, token: user.accessToken }))
	const { setFlash } = useFlash()



	React.useEffect(() => {
		const infoAboutAccount = (): React.ReactNode => {
			if (!hasAuthenticatedTelegram()) {
				return (
					<p>To be able to subscribe to events or invoke actions a user must have authenticated his Telegram account with this service. 
					Please follow this link to the <a href="https://t.me/iot_granstedt_bot" target="__blank">IOT Bot</a>. Send your userid <strong>{user.userId}</strong> in the chat to connect your telegram account to your user id.
					After you have succesfully connected your telegram id, please sign out and sign back in for everything to be up and running</p>
				)
			}
			if (hasAuthenticatedTelegram()) {
				return (
					<p>You have already connected a Telegram account. To update to another Telegram account, please follow this link to the <a className="text-primary" href="https://t.me/iot_granstedt_bot" target="__blank">IOT Bot</a>. Send your userid <strong>{user.userId}</strong> in the chat to connect your telegram account to your user id.</p>
				)
			}
		}

		if (!hasAuthenticatedTelegram()) {
			setFlash({ messageType: FlashMessageType.Warning, message: infoAboutAccount()}, 10)
		}

		if (hasAuthenticatedTelegram()) {
			setFlash({ messageType: FlashMessageType.Success, message: infoAboutAccount()}, 5)
		}

}, [hasAuthenticatedTelegram, setFlash, user.userId])

	if (isLoading || isError || !thing) {
		return (
			<div>
				<h1>Thing Page</h1>
				<Loader type="ThreeDots" color="#cccccc" height={30} />
			</div>
		)
	} else {
		return (
			<div className="container mx-auto text-gray-800">
				<Heading>Thing Page - {thing.title}</Heading>
				<Card className="my-6"><ThingInfo className="bg-secondary p-4" thing={thing}/></Card>
				<Card className="my-6"><PropertiesOverview className="bg-fourth p-4" properties={thing.properties}/></Card>
				<Card className="my-6"><ActionsOverview className="bg-fourth p-4" actions={thing.actions}/></Card>
				<Card className="my-6"><EventsOverview className="bg-fourth p-4" events={thing.events} refetchThing={refetchThing}/></Card>
			</div>
		)
	}
}