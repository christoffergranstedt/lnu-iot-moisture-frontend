import React from 'react'
import { v4 as uuid } from 'uuid'
import { Card } from '../Card/Card'

import { Action } from '../Action/Action'
import { ActionDescription } from '../../Types/ActionDescription'

interface ActionProps {
	actions: ActionDescription[]
}

export const ActionsOverview: React.FC<ActionProps> = ({ actions }) => {
	return (
		<Card>
			<h3>Actions</h3>
			{actions.map(action => {
				return <Action key={uuid()} action={action}/>
			})}
		</Card>
	)
}