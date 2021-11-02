import React from 'react'
import { v4 as uuid } from 'uuid'
import Card from '../Card/Card'

import { ActionDescription } from '../../Utils/types/ActionDescription'
import Action from '../Action/Action'

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