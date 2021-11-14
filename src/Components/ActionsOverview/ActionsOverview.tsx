import React from 'react'
import { v4 as uuid } from 'uuid'

import { Action } from '../Action/Action'
import { ActionDescription } from '../../Types/ActionDescription'
import { useAuth } from '../../Hooks/useAuth'
import { SubHeading } from '../SubHeading/SubHeading'

interface ActionProps {
	actions: ActionDescription[]
	className?: string
}

export const ActionsOverview: React.FC<ActionProps> = ({ actions, className }) => {
	const { hasAuthenticatedTelegram } = useAuth()

	return (
		<div className={className}>
			<SubHeading>Actions</SubHeading>
			<div className="flex flex-wrap justify-center">
				{!hasAuthenticatedTelegram() ? <p>No Telegram account connected, follow instructions above</p> : actions.map(action => {
					return <Action key={uuid()} action={action} className="neumorphism mx-4 my-2 border-2 border-gray-200"/>
				})}
		
			</div>
		</div>
	)
}