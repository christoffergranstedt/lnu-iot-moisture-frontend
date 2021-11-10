import React from 'react'
import styled from 'styled-components'

import { useAuth } from '../../Hooks/useAuth'
import { ThingDescription } from '../../Types/ThingDescription'

const StyledDiv = styled.div`
  padding: 5px;
`

interface ThingInfoProps {
	thing: ThingDescription;
}

export const ThingInfo: React.FC<ThingInfoProps> = ({ thing }) => {
	const { hasAuthenticatedTelegram, user } = useAuth()

	return (
		<StyledDiv>
      <p><strong>Id: </strong> {thing.id}</p>
      <p><strong>Description:</strong> {thing.description}</p>
      { !hasAuthenticatedTelegram() && <p>To be able to subscribe to events or invoke actions a user must have authenticated his Telegram account with this service. 
      Please follow this link to the <a href="https://t.me/iot_granstedt_bot" target="__blank">IOT Bot</a>. Send your userid <strong>{user.userId}</strong> in the chat to connect your telegram account to your user id.
      After you have succesfully connected your telegram id, please sign out and sign back in for everything to be up and running </p> }
      { hasAuthenticatedTelegram() && <p>You have already connected a Telegram account. To update to another Telegram account, please follow this link to the <a href="https://t.me/iot_granstedt_bot" target="__blank">IOT Bot</a>. Send your userid <strong>{user.userId}</strong> in the chat to connect your telegram account to your user id. </p>} 
		</StyledDiv>
	)
}