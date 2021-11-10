import React from 'react'
import { v4 as uuid } from 'uuid'
import { Card } from '../Card/Card'

import { Action } from '../Action/Action'
import { ActionDescription } from '../../Types/ActionDescription'
import { useAuth } from '../../Hooks/useAuth'

interface ActionProps {
	actions: ActionDescription[]
}

export const ActionsOverview: React.FC<ActionProps> = ({ actions }) => {
	const { hasAuthenticatedTelegram } = useAuth()

	return (
		<Card>
			<h3>Actions</h3>
			{!hasAuthenticatedTelegram() ? <p>No Telegram account connected, follow instructions above</p> : actions.map(action => {
				return <Action key={uuid()} action={action}/>
			})}
		</Card>
	)
}